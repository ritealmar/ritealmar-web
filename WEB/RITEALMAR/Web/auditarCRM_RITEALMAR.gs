/**
 * Auditoría CRM RITEALMAR Enterprise para Google Sheets.
 *
 * Esta función crea una copia de seguridad automática, genera un informe
 * de auditoría y un sistema de logs, y analiza la estructura y los datos
 * del documento actual sin modificar los datos existentes.
 */
function auditarCRM_RITEALMAR() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var spreadsheetId = spreadsheet.getId();
  var file = DriveApp.getFileById(spreadsheetId);
  var timestamp = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd_HH-mm-ss');
  var backupName = 'BACKUP_RITEALMAR_' + timestamp;

  // 1. Crear backup automático
  var backupFile = file.makeCopy(backupName);

  // 2. Crear o limpiar hoja de auditoría y logs
  var auditSheet = getOrCreateSheet_(spreadsheet, 'AUDITORIA_CRM');
  var logSheet = getOrCreateSheet_(spreadsheet, 'LOGS');

  clearSheetContents_(auditSheet);
  clearSheetContents_(logSheet);

  setupAuditSheet_(auditSheet);
  setupLogSheet_(logSheet);

  // 3. Obtener información general de archivo
  var fileInfo = {
    id: spreadsheetId,
    name: spreadsheet.getName(),
    url: spreadsheet.getUrl(),
    lastUpdated: Utilities.formatDate(file.getLastUpdated(), Session.getScriptTimeZone(), 'yyyy-MM-dd HH:mm:ss'),
    backupName: backupName,
    backupUrl: backupFile.getUrl()
  };

  var auditRows = [];
  var structureReport = [];

  // 4. Analizar cada hoja existente
  var sheets = spreadsheet.getSheets();
  sheets.forEach(function(sheet) {
    if (sheet.getName() === 'AUDITORIA_CRM' || sheet.getName() === 'LOGS') {
      return;
    }

    var result = analyzeSheet_(sheet);
    auditRows = auditRows.concat(result.rows);
    structureReport.push(result.structureLine);
  });

  // 5. Guardar resultados en auditoría
  if (auditRows.length > 0) {
    auditSheet.getRange(2, 1, auditRows.length, auditRows[0].length).setValues(auditRows);
  }

  // 6. Registrar el resultado en logs
  appendLog_(logSheet, 'auditarCRM_RITEALMAR', 'Backup creado y auditoría ejecutada', 'Éxito', null, fileInfo);

  // 7. Informe final como mensaje al usuario y en log
  var report = buildFinalReport_(sheets, fileInfo, structureReport, auditRows);
  appendLog_(logSheet, 'auditarCRM_RITEALMAR', 'Informe final generado', 'Éxito', report);

  SpreadsheetApp.getActiveSpreadsheet().toast('AUDITORÍA COMPLETADA: revisa AUDITORIA_CRM y LOGS.', 'Auditoría CRM RITEALMAR', 10);
  Logger.log(report);
}

function getOrCreateSheet_(spreadsheet, sheetName) {
  var sheet = spreadsheet.getSheetByName(sheetName);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(sheetName);
  }
  return sheet;
}

function clearSheetContents_(sheet) {
  sheet.clearContents();
  sheet.clearFormats();
}

function setupAuditSheet_(sheet) {
  var headers = [
    'Fecha auditoría',
    'Hoja analizada',
    'Filas',
    'Columnas',
    'Campos encontrados',
    'Registros totales',
    'Filas vacías',
    'Duplicados detectados',
    'Emails repetidos',
    'Campos incompletos',
    'Errores de formato',
    'Problemas detectados',
    'Recomendaciones'
  ];
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.setFrozenRows(1);
}

function setupLogSheet_(sheet) {
  var headers = ['Fecha', 'Función ejecutada', 'Acción', 'Resultado', 'Error', 'Detalle'];
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.setFrozenRows(1);
}

function appendLog_(sheet, funcName, action, result, error, detail) {
  var now = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd HH:mm:ss');
  var row = [now, funcName, action, result, error || '', detail ? JSON.stringify(detail) : ''];
  sheet.appendRow(row);
}

function analyzeSheet_(sheet) {
  var sheetName = sheet.getName();
  var lastRow = sheet.getLastRow();
  var lastColumn = sheet.getLastColumn();
  var headerValues = [];
  var dataValues = [];

  if (lastRow >= 1 && lastColumn >= 1) {
    headerValues = sheet.getRange(1, 1, 1, lastColumn).getValues()[0];
    if (lastRow > 1) {
      dataValues = sheet.getRange(2, 1, lastRow - 1, lastColumn).getValues();
    }
  }

  var totalRecords = Math.max(0, lastRow - 1);
  var emptyRows = 0;
  var duplicateCount = 0;
  var emailDuplicates = 0;
  var incompleteFields = 0;
  var formatErrors = 0;
  var problemList = [];
  var sampleTypes = [];
  var duplicateMap = {};
  var emailMap = {};
  var emailHeaderIndices = findHeaderIndices_(headerValues, ['email', 'correo']);
  var typeCandidates = inferHeaderTypes_(headerValues);

  // Detect field types from sample data
  sampleTypes = typeCandidates.map(function(header, index) {
    var sampleType = detectColumnType_(header, dataValues, index);
    return sampleType;
  });

  var rowKeys = {};
  for (var r = 0; r < dataValues.length; r++) {
    var row = dataValues[r];
    var rowEmpty = row.every(function(cell) {
      return cell === '' || cell === null;
    });
    if (rowEmpty) {
      emptyRows++;
      continue;
    }

    // Duplicate row detection
    var rowKey = row.map(function(cell) {
      return String(cell).trim().toLowerCase();
    }).join('||');
    if (rowKey in rowKeys) {
      duplicateCount++;
    } else {
      rowKeys[rowKey] = true;
    }

    // Email repeats
    emailHeaderIndices.forEach(function(index) {
      var email = String(row[index] || '').trim().toLowerCase();
      if (email) {
        if (emailMap[email]) {
          emailMap[email]++;
        } else {
          emailMap[email] = 1;
        }
      }
    });

    // Incomplete fields and format errors
    for (var c = 0; c < headerValues.length; c++) {
      var header = headerValues[c];
      var value = row[c];
      if (value === '' || value === null) {
        incompleteFields++;
      } else {
        if (isEmailHeader_(header) && !isValidEmail_(value)) {
          formatErrors++;
        }
        if (isDateHeader_(header) && !isValidDate_(value)) {
          formatErrors++;
        }
        if (isNumericHeader_(header) && !isValidNumber_(value)) {
          formatErrors++;
        }
      }
    }
  }

  emailDuplicates = Object.keys(emailMap).filter(function(email) {
    return emailMap[email] > 1;
  }).length;

  if (duplicateCount > 0) {
    problemList.push('Se detectaron filas duplicadas: ' + duplicateCount);
  }
  if (emailDuplicates > 0) {
    problemList.push('Emails repetidos detectados: ' + emailDuplicates);
  }
  if (incompleteFields > 0) {
    problemList.push('Campos incompletos: ' + incompleteFields);
  }
  if (formatErrors > 0) {
    problemList.push('Errores de formato: ' + formatErrors);
  }
  if (totalRecords === 0) {
    problemList.push('No hay registros de datos.');
  }

  var structureLine = detectStructureLine_(sheetName, headerValues);

  var headerSummary = headerValues.map(function(h, index) {
    return (index + 1) + ': ' + (h || '(vacío)') + ' [' + sampleTypes[index] + ']';
  }).join('; ');

  var row = [
    Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd HH:mm:ss'),
    sheetName,
    lastRow,
    lastColumn,
    headerSummary,
    totalRecords,
    emptyRows,
    duplicateCount,
    emailDuplicates,
    incompleteFields,
    formatErrors,
    problemList.join(' | '),
    buildRecommendations_(sheetName, totalRecords, duplicateCount, emailDuplicates, incompleteFields, formatErrors, structureLine)
  ];

  return {rows: [row], structureLine: structureLine};
}

function detectHeaderIndices_(headerValues, keywords) {
  var indices = [];
  for (var i = 0; i < headerValues.length; i++) {
    var headerText = String(headerValues[i] || '').toLowerCase();
    keywords.forEach(function(keyword) {
      if (headerText.indexOf(keyword) !== -1) {
        indices.push(i);
      }
    });
  }
  return indices;
}

function findHeaderIndices_(headerValues, keywords) {
  return detectHeaderIndices_(headerValues, keywords);
}

function inferHeaderTypes_(headers) {
  return headers.map(function(header) {
    var normalized = String(header || '').toLowerCase();
    if (normalized.indexOf('email') !== -1 || normalized.indexOf('correo') !== -1) {
      return 'Email';
    }
    if (normalized.indexOf('fecha') !== -1 || normalized.indexOf('dia') !== -1) {
      return 'Fecha';
    }
    if (normalized.indexOf('tel') !== -1 || normalized.indexOf('movil') !== -1 || normalized.indexOf('phone') !== -1) {
      return 'Teléfono';
    }
    if (normalized.indexOf('cif') !== -1 || normalized.indexOf('nif') !== -1 || normalized.indexOf('dni') !== -1) {
      return 'Identificador';
    }
    if (normalized.indexOf('valor') !== -1 || normalized.indexOf('importe') !== -1 || normalized.indexOf('monto') !== -1) {
      return 'Número';
    }
    if (normalized.indexOf('estado') !== -1 || normalized.indexOf('prioridad') !== -1) {
      return 'Estado';
    }
    return 'Texto';
  });
}

function detectColumnType_(header, dataValues, index) {
  var headerType = inferHeaderTypes_([header])[0];
  if (headerType !== 'Texto') {
    return headerType;
  }
  for (var i = 0; i < Math.min(20, dataValues.length); i++) {
    var value = dataValues[i][index];
    if (value !== '' && value !== null) {
      if (isValidEmail_(value)) {
        return 'Email';
      }
      if (isValidDate_(value)) {
        return 'Fecha';
      }
      if (isValidNumber_(value)) {
        return 'Número';
      }
      return 'Texto';
    }
  }
  return 'Texto';
}

function isEmailHeader_(header) {
  var t = String(header || '').toLowerCase();
  return t.indexOf('email') !== -1 || t.indexOf('correo') !== -1;
}

function isDateHeader_(header) {
  var t = String(header || '').toLowerCase();
  return t.indexOf('fecha') !== -1 || t.indexOf('dia') !== -1 || t.indexOf('date') !== -1;
}

function isNumericHeader_(header) {
  var t = String(header || '').toLowerCase();
  return t.indexOf('valor') !== -1 || t.indexOf('importe') !== -1 || t.indexOf('monto') !== -1 || t.indexOf('cantidad') !== -1;
}

function isValidEmail_(value) {
  var email = String(value || '');
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function isValidDate_(value) {
  if (value instanceof Date && !isNaN(value.getTime())) {
    return true;
  }
  var parsed = new Date(value);
  return !isNaN(parsed.getTime());
}

function isValidNumber_(value) {
  if (value === '' || value === null) {
    return false;
  }
  var number = Number(String(value).toString().replace(/[^0-9\.,\-]/g, '').replace(',', '.'));
  return !isNaN(number);
}

function detectStructureLine_(sheetName, headerValues) {
  var normalizedName = sheetName.toLowerCase();
  var normalizedHeaders = headerValues.map(function(h) {
    return String(h || '').toLowerCase();
  });
  var has = function(term) {
    return normalizedName.indexOf(term) !== -1 || normalizedHeaders.some(function(h) {
      return h.indexOf(term) !== -1;
    });
  };

  var details = [];
  details.push('Empresas: ' + (has('empresa') ? 'sí' : 'no'));
  details.push('Contactos: ' + (has('contacto') ? 'sí' : 'no'));
  details.push('Leads: ' + (has('lead') ? 'sí' : 'no'));
  details.push('Oportunidades: ' + (has('oportunidad') ? 'sí' : 'no'));
  details.push('Historial: ' + (has('historial') ? 'sí' : 'no'));
  details.push('Actividad: ' + (has('actividad') ? 'sí' : 'no'));
  details.push('Estados: ' + (has('estado') ? 'sí' : 'no'));
  return sheetName + ' -> ' + details.join(', ');
}

function buildRecommendations_(sheetName, totalRecords, duplicateCount, emailDuplicates, incompleteFields, formatErrors, structureLine) {
  var rec = [];
  rec.push('Revisar nombre de hoja: ' + sheetName + '.');
  if (totalRecords === 0) {
    rec.push('La hoja no contiene registros de datos.');
  }
  if (duplicateCount > 0) {
    rec.push('Validar y limpiar duplicados.');
  }
  if (emailDuplicates > 0) {
    rec.push('Corregir emails duplicados.');
  }
  if (incompleteFields > 0) {
    rec.push('Completar campos obligatorios y evitar celdas vacías.');
  }
  if (formatErrors > 0) {
    rec.push('Revisar formatos de fechas, emails y números.');
  }
  rec.push('Evaluar si esta hoja corresponde a Empresas, Contactos, Leads, Oportunidades o Estados.');
  rec.push('Mantener los datos existentes sin borrar hasta validar la nueva arquitectura.');
  return rec.join(' ');
}

function buildFinalReport_(sheets, fileInfo, structureReport, auditRows) {
  var sheetNames = sheets.map(function(sheet) {
    return sheet.getName();
  }).join(', ');
  var foundSheets = sheetNames;
  var usableData = auditRows.filter(function(row) {
    return row[5] > 0;
  }).length;
  var problems = auditRows.map(function(row) {
    return row[11];
  }).filter(function(text) {
    return text && text.length > 0;
  }).join(' | ');
  var risks = [];
  if (auditRows.some(function(row) { return row[7] > 0; })) {
    risks.push('Duplicados detectados');
  }
  if (auditRows.some(function(row) { return row[8] > 0; })) {
    risks.push('Emails repetidos');
  }
  if (auditRows.some(function(row) { return row[9] > 0; })) {
    risks.push('Campos incompletos');
  }
  if (auditRows.some(function(row) { return row[10] > 0; })) {
    risks.push('Errores de formato');
  }
  if (risks.length === 0) {
    risks.push('Sin riesgos críticos detectados en el análisis inicial.');
  }

  var reportLines = [
    'AUDITORÍA COMPLETADA',
    'Hoja actual: ' + fileInfo.name,
    'URL: ' + fileInfo.url,
    'Backup creado: ' + fileInfo.backupName + ' (' + fileInfo.backupUrl + ')',
    'Hojas encontradas: ' + foundSheets,
    'Estructura detectada: ' + structureReport.join(' | '),
    'Datos aprovechables: ' + usableData + ' hojas con registros.',
    'Problemas detectados: ' + (problems || 'No se detectaron problemas visibles.'),
    'Riesgos: ' + risks.join(', '),
    'Recomendación: crear primero la arquitectura normalizada de Empresas, Contactos, Leads y Oportunidades basándose en esta auditoría, sin borrar datos.',
    'Recomendación: mantener el backup antes de cualquier cambio y usar LOGS para rastrear cada acción.'
  ];
  return reportLines.join('\n');
}

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('CRM RITEALMAR')
    .addItem('Ejecutar auditoría CRM', 'auditarCRM_RITEALMAR')
    .addToUi();
}
