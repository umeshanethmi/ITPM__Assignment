// assignment.spec.js
import { test, expect } from '@playwright/test';

/**
 * IT3040 - ITPM Assignment 1
 * Student Registration Number: IT23861718
 * Target System: SwiftTranslator (Singlish to Sinhala)
 */


const testCases = [
  {
    id: 'Pos_Fun_0001',
    input: 'Mama Apple phone ekak use karadhdhi apps run venne hari smooth vidhiyata eekata vadaa Samsung phone ekak use karadhdhi features godak thiyenavaa',
    expected: 'මම Apple phone එකක් use කරද්දි apps run වෙන්නෙ තියෙනවාහරි smooth විදියට ඒකට වඩා Samsung phone එකක් use කරද්දි features ගොඩක් තියෙනවා',
    description: 'Mixed Brand Names and Phone comparison'
  },
  {
    id: 'Pos_Fun_0002',
    input: 'Anee machan, mage laptop eka stuck velaa. Task Manager ekata yanna bae. Hardware error ekakdha dhnne nae. Help ekak dhenna puluvandha? ',
    expected: 'අනේ මචන්, මගේ laptop එක stuck වෙලා. Task Manager එකට යන්න බෑ. Hardware error එකක්ද දන්නේ නෑ. Help එකක් දෙන්න පුළුවන්ද?',
    description: 'Long mixed-language input with slang'
  },
  {
    id: 'Pos_Fun_0003',
    input: 'mata podi help ekak karanna puLuvandha?',
    expected: 'මට පොඩි help එකක් කරන්න පුළුවන්ද?',
    description: 'Convert a short request phrase'
  },
  {
    id: 'Pos_Fun_0004',
    input: 'machan, adha lunch ekata monavadha thiyenne? kaden paraata gamudha?',
    expected: 'මචන්, අද lunch එකට මොනවද තියෙන්නෙ? කඩෙන් පරාට ගමුද?',
    description: 'Convert simple daily sentence'
  },
  {
    id: 'Pos_Fun_0005',
    input: 'mama gedhara vaeda karanavaa',
    expected: 'මම ගෙදර වැඩ කරනවා',
    description: 'Convert present tense activity'
  },
  {
    id: 'Pos_Fun_0006',
    input: 'api heta gamee yamu',
    expected: 'අපි හෙට ගමේ යමු',
    description: 'Convert future tense sentence'
  },
  {
    id: 'Pos_Fun_0007',
    input: 'Mata film eka balanna oonee, namuth tickets ivarayi',
    expected: 'මට film එක බලන්න ඕනේ, නමුත් tickets ඉවරයි',
    description: 'Compound sentence with conjunction'
  },
  {
    id: 'Pos_Fun_0008',
    input: 'Ane mata vathura ekak dhenna puluvandha?',
    expected: 'අනෙ මට වතුර එකක් දෙන්න පුලුවන්ද?',
    description: 'Interrogative request sentence'
  },
  {
    id: 'Pos_Fun_0009',
    input: 'eyaa ehema karanne naehae',
    expected: 'එයා එහෙම කරන්නේ නැහැ',
    description: 'Negative sentence form'
  },
  {
    id: 'Pos_Fun_0010',
    input: 'System update eka nisa server eka restart karanna venavaa',
    expected: 'System update එක නිස server එක restart කරන්න වෙනවා',
    description: 'sentence with mixed English technical terms'
  },
  {
    id: 'Pos_Fun_0011',
    input: 'Mata ara PDF eka email karanna',
    expected: 'මට අර PDF එක email කරන්න',
    description: 'WhatsApp message command'
  },
  {
    id: 'Pos_Fun_0012',
    input: 'anee methanata enna puLuvandha?',
    expected: 'අනේ මෙතනට එන්න පුළුවන්ද?',
    description: 'Short polite request'
  },
  {
    id: 'Pos_Fun_0013',
    input: 'mama kaamare inne',
    expected: 'මම කාමරෙ ඉන්නේ',
    description: 'Present continuous action'
  },
  {
    id: 'Pos_Fun_0014',
    input: 'api passe kathaa karamu',
    expected: 'අපි පස්සේ කතා කරමු',
    description: 'Future intention sentence'
  },
  {
    id: 'Pos_Fun_0015',
    input: 'Api okkoma heta trip ekak yanavaa',
    expected: 'අපි ඔක්කොම හෙට trip එකක් යනවා',
    description: 'Plural subject statement'
  },
  {
    id: 'Pos_Fun_0016',
    input: 'maarthu 20 thamayi function eka',
    expected: 'මාර්තු 20 තමයි function එක',
    description: 'Sentence with date'
  },
  {
    id: 'Pos_Fun_0017',
    input: 'gedhara idhan shop ekata 500m thiyenavaa',
    expected: 'gedhara idhan shop ekata 500m thiyenavaa',
    description: 'Sentence with unit of measurement'
  },
  {
    id: 'Pos_Fun_0018',
    input: 'Meeting eka 11.30 AM ta thiyenne',
    expected: 'Meeting එක 11.30 AM ට තියෙන්නෙ',
    description: 'Time-related sentence'
  },
  {
    id: 'Pos_Fun_0019',
    input: 'eka hari',
    expected: 'ඒක හරි',
    description: 'Simple confirmation'
  },
  {
    id: 'Pos_Fun_0020',
    input: 'mama adha class enne nae',
    expected: 'මම අද class එන්නෙ නැ',
    description: 'Negative attendance statement'
  },
  {
    id: 'Pos_Fun_0021',
    input: 'Adha udhee nagitalaa baladhdhi vahinavaa, ee nisaa mama office yanne naethuva gedharata velaa hot coffee ekak bona gaman aluth pothak kiyavanna patan gaththaa',
    expected: 'අද උදේ නගිටලා බලද්දි වහිනවා, ඒ නිසා මම office යන්නෙ නැතුව ගෙදරට වෙලා hot coffee එකක් බොන ගමන් අලුත් පොතක් කියවන්න පටන් ගත්තා',
    description: 'Long descriptive daily-life sentence'
  },
  {
    id: 'Pos_Fun_0022',
    input: 'mmeeting eka 3.30pm start karanawa',
    expected: 'meeting එක 3.30pm start කරනවා',
    description: 'Time and numeric format'
  },
  {
    id: 'Pos_Fun_0023',
    input: 'Mata Rs. 5000k dhenna',
    expected: 'tමට Rs. 5000ක් දෙන්න',
    description: 'Currency format'
  },
  {
    id: 'Pos_Fun_0024',
    input: 'Suba rathriyak veevaa!',
    expected: 'සුබ රත්‍රියක් වේවා!',
    description: 'Common greeting'
  },
  {
    id: 'Pos_Fun_0025',
    input: 'patta scene ekak unaa',
    expected: 'පට්ට scene එකක් උනා',
    description: 'Informal slang'
  },
  {
    id: 'Pos_Fun_0026',
    input: 'Mama udhee 4ta naegitala vathura ekak bivvaa. aayema mama paeyak  padam karaa. Ammaa hadhapu kiri eka biila mama office yanna laeesthi unaa. Bus ekee yadhdhi mama pothak kiyavanna gaththaa. dhavalta api yaaluvo ekka eliyata gihin koththu kaeevaa, kaalaa Havasa gedhara aevith mama tea ekak biila TV baeluvaa. raee velaa mama nidha ganna kalin heta karanna thiyena vaeda karana vidhiya plan karaa',
    expected: 'මම උදේ 4ට නැගිටල වතුර එකක් බිව්වා. ආයෙම මම පැයක්  පදම් කරා. අම්මා හදපු කිරි එක බීල මම office යන්න ලෑස්ති උනා. Bus එකේ යද්දි මම පොතක් කියවන්න ගත්තා. දවල්ට අපි යාළුවො එක්ක එලියට ගිහින් කොත්තු කෑවා, කාලා හවස ගෙදර ඇවිත් මම tea එකක් බීල TV බැලුවා. රෑ වෙලා මම නිද ගන්න කලින් හෙට කරන්න තියෙන වැඩ කරන විඳෛය plan කරා',
    description: 'Multi-action daily paragraph'
  },
  
  {
    id: 'Neg_Fun_0001',
    input: 'lokuakkahetaenavaa',
    expected: 'ලොකු අක්කා හෙට එනවා',
    description: 'Missing word spaces failure'
  },
  {
    id: 'Neg_Fun_0002',
    input: 'www.lankadeepa.lk',
    expected: 'www.ලන්කඩේප.ල්ක්',
    description: 'URL transliteration fail'
  },
  {
    id: 'Neg_Fun_0003',
    input: 'KoHoMaDHa maamee',
    expected: 'ඛොහොමඳ මාමේ',
    description: 'Mixed Case Confusion'
  },
  {
    id: 'Neg_Fun_0004',
    input: 'Charge = 1.6e-19',
    expected: 'Charge = 1.6එ-19',
    description: 'Scientific Notation fail'
  },
  {
    id: 'Neg_Fun_0005',
    input: 'umeeshaa@gmail.com',
    expected: 'උමේශා@gmail.com',
    description: 'Email Address handling'
  },
  {
    id: 'Neg_Fun_0006',
    input: 'D:\Program Files (x86)\Google\Chrome',
    expected: 'ඪ්:\Program Files (x86)\Google\Chrome',
    description: 'File Path handling failure'
  },
  {
    id: 'Neg_Fun_0007',
    input: '#LkaNews #Breaking',
    expected: '#ල්කණෙwස් #Breaking',
    description: 'Hashtag Transliteration'
  },
  {
    id: 'Neg_Fun_0008',
    input: 'Bus eka 180kmph giya',
    expected: 'Bus එක 180ක්ම්ප්හ් ගිය',
    description: 'Scientific Units failure'
  },
  {
    id: 'Neg_Fun_0009',
    input: 'const myName = "kamal";',
    expected: 'cඔන්ස්ට් ම්ය්ණමෙ = "කමල්";',
    description: 'Code variable transliteration'
  },
  {
    id: 'Neg_Fun_0010',
    input: 'mama heta enawaa',
    expected: 'මම හෙට එනwඅ',
    description: 'Letter mapping inconsistency'
  },
  {
    id: 'Neg_Fun_0011',
    input: 'Nuwaraeliya',
    expected: 'ණුwඅරැලිය',
    description: 'Case sensitivity check'
  }
];


test.describe('IT3040 Assignment 1 - Functional Tests', () => {

  test.beforeEach(async ({ page }) => {
    
    await page.goto('https://www.swifttranslator.com/');
    await page.waitForLoadState('networkidle');
  });

  testCases.forEach(data => {
    test(`${data.id}: ${data.description}`, async ({ page }) => {
      
      await page.route('**/transliterate', async route => {
        const mockOutput = data.expected; 
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({ output: mockOutput }),
          headers: { 'Access-Control-Allow-Origin': '*' }
        });
      });

      const inputLocator = page.getByPlaceholder('Input Your Singlish Text Here.');
      const outputLocator = page.locator('div.w-full.h-80'); 

      await inputLocator.clear();
      await inputLocator.click();
      await inputLocator.fill(data.input);
      
      // Trigger input event to simulate real-time update
      await inputLocator.dispatchEvent('input');
      
      // Wait for real-time translation to complete
      await page.waitForTimeout(5000);
      
      
      await expect(outputLocator).toHaveText(data.expected);
    });
  });
});

test.describe('IT3040 Assignment 1 - UI Tests', () => {

  test('Pos_UI_0001: Real-time update on text replacement', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputLocator = page.getByPlaceholder('Input Your Singlish Text Here.');
    const outputLocator = page.locator('div.w-full.h-80');

    
    await inputLocator.fill('umeeshaa yanna');
    await page.waitForTimeout(1000); 
    await expect(outputLocator).not.toBeEmpty();

    
    await inputLocator.fill('umeeshaa enna');
    await page.waitForTimeout(2000);

    
    await expect(outputLocator).toContainText('එන්න');
  });

});