const fs = require('fs');
const path = require('path');

const filesToFix = [
  "c:\\Users\\Usuario\\Desktop\\RITEALMAR\\WEB\\RITEALMAR\\Web\\src\\components\\AboutSection.tsx",
  "c:\\Users\\Usuario\\Desktop\\RITEALMAR\\WEB\\RITEALMAR\\Web\\src\\components\\AlmarFeatureTour.tsx",
  "c:\\Users\\Usuario\\Desktop\\RITEALMAR\\WEB\\RITEALMAR\\Web\\src\\components\\AgencyLanding.tsx",
  "c:\\Users\\Usuario\\Desktop\\RITEALMAR\\WEB\\RITEALMAR\\Web\\src\\pages\\GenericProjectPage.tsx",
  "c:\\Users\\Usuario\\Desktop\\RITEALMAR\\WEB\\RITEALMAR\\Web\\src\\components\\Logo3D.tsx",
  "c:\\Users\\Usuario\\Desktop\\RITEALMAR\\WEB\\RITEALMAR\\Web\\src\\components\\PortfolioSection.tsx",
  "c:\\Users\\Usuario\\Desktop\\RITEALMAR\\WEB\\RITEALMAR\\Web\\src\\components\\RestaurantDemo.tsx",
  "c:\\Users\\Usuario\\Desktop\\RITEALMAR\\WEB\\RITEALMAR\\Web\\src\\components\\RitealmarCorpLanding.tsx",
  "c:\\Users\\Usuario\\Desktop\\RITEALMAR\\WEB\\RITEALMAR\\Web\\src\\components\\SEOAdminAutomation.tsx",
  "c:\\Users\\Usuario\\Desktop\\RITEALMAR\\WEB\\RITEALMAR\\Web\\src\\components\\SEOAutomationPymes.tsx",
  "c:\\Users\\Usuario\\Desktop\\RITEALMAR\\WEB\\RITEALMAR\\Web\\src\\components\\SEOIAAttention.tsx",
  "c:\\Users\\Usuario\\Desktop\\RITEALMAR\\WEB\\RITEALMAR\\Web\\src\\components\\ServicesSection.tsx",
  "c:\\Users\\Usuario\\Desktop\\RITEALMAR\\WEB\\RITEALMAR\\Web\\src\\components\\Testimonials.tsx"
];

for (const file of filesToFix) {
  try {
    let content = fs.readFileSync(file, 'utf8');
    
    // Check if there are any <img> tags
    if (content.includes('<img ')) {
      // Very basic replace for typical react <img ... />
      // Add loading="lazy" if not present and it's not the Navbar (already done)
      // Add width="800" height="600" as a fallback if width/height missing
      // We will use a regex to match <img ... />
      
      content = content.replace(/<img([^>]+)>/g, (match, attrs) => {
        let newAttrs = attrs;
        
        // Don't modify if it has loading="eager"
        if (!newAttrs.includes('loading="eager"')) {
          if (!newAttrs.includes('loading=')) {
            newAttrs += ' loading="lazy" decoding="async"';
          }
        }
        
        if (!newAttrs.includes('width=')) {
          newAttrs += ' width="800"';
        }
        if (!newAttrs.includes('height=')) {
          newAttrs += ' height="600"';
        }
        
        return `<img${newAttrs}>`;
      });
      
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Fixed images in ${file}`);
    }
  } catch (e) {
    console.error(`Error processing ${file}:`, e.message);
  }
}
