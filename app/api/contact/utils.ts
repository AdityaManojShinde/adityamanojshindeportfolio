import fs from 'fs';
import path from 'path';

/**
 * Reads an email template file and replaces placeholders with actual values
 * 
 * @param templateName - Name of the template file (without path)
 * @param replacements - Object containing key-value pairs for replacements
 * @returns Processed HTML string
 */
export function getEmailTemplate(templateName: string, replacements: Record<string, string>): string {
  try {
    // Get the absolute path to the template file
    const templatePath = path.join(process.cwd(), 'app', 'api', 'contact', 'templates', templateName);
    
    // Read the template file
    let template = fs.readFileSync(templatePath, 'utf8');
    
    // Replace all placeholders with their values
    Object.entries(replacements).forEach(([key, value]) => {
      const regex = new RegExp(`{{${key}}}`, 'g');
      template = template.replace(regex, value);
    });
    
    return template;
  } catch (error: any) {
    console.error(`Error processing email template: ${error.message}`);
    throw new Error(`Failed to process email template: ${error.message}`);
  }
}
