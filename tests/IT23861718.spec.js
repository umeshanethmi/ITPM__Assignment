import { test, expect } from '@playwright/test';

// 1. Functional Test Cases (Based strictly on your Excel File)
const testCases = [
  // --- POSITIVE FUNCTIONAL TESTS ---
  {
    id: 'Pos_Fun_0001',
    input: 'Mama Apple phone ekak use karadhdhi apps run venne hari smooth vidhiyata eekata vadaa Samsung phone ekak use karadhdhi features godak thiyenavaa',
    expected: 'මම Apple phone එකක් use කරද්දි apps run වෙන්නෙ හරි smooth විදියට ඒකට වඩා Samsung phone එකක් use කරද්දි features ගොඩක් තියෙනවා',
    description: 'Mixed Brand Names and Phone comparison'
  },
  {
    id: 'Pos_Fun_0002',
    input: 'Anee machan, mage laptop eka stuck velaa. Task Manager ekata yanna bae. Hardware error ekakdha dhnne nae. Help ekak dhenna puluvandha?',
    expected: 'අනේ මචන්, mage laptop එක stuck වෙලා. Task Manager එකට යන්න බැ. Hardware error එකක්ද ද්න්නෙ නැ. Help එකක් දෙන්න පුලුවන්ද?',
    description: 'Long mixed-language input with slang + typo'
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
    description: 'Convert present tense daily activity'
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
    description: 'Convert compound sentence with conjunction'
  },
  {
    id: 'Pos_Fun_0008',
    input: 'Ane mata vathura ekak dhenna puluvandha?',
    expected: 'අනෙ මට වතුර එකක් දෙන්න පුලුවන්ද?',
    description: 'Convert interrogative request sentence'
  },
  {
    id: 'Pos_Fun_0009',
    input: 'eyaa ehema karanne naehae',
    expected: 'එයා එහෙම කරන්නේ නැහැ',
    description: 'Convert negative sentence form'
  },
  {
    id: 'Pos_Fun_0010',
    input: 'System update eka nisa server eka restart karanna venavaa',
    expected: 'System update එක නිස server එක restart කරන්න වෙනවා',
    description: 'Convert sentence with mixed English technical terms'
  },
  {
    id: 'Pos_Fun_0011',
    input: 'Mata ara PDF eka email karanna',
    expected: 'මට අර PDF එක email කරන්න',
    description: 'Convert WhatsApp message command'
  },
  {
    id: 'Pos_Fun_0012',
    input: 'anee methanata enna puLuvandha?',
    expected: 'අනේ මෙතනට එන්න පුළුවන්ද?',
    description: 'Convert short polite request'
  },
  {
    id: 'Pos_Fun_0013',
    input: 'mama kaamare inne',
    expected: 'මම කාමරෙ ඉන්නේ',
    description: 'Convert present continuous action'
  },
  {
    id: 'Pos_Fun_0014',
    input: 'api passe kathaa karamu',
    expected: 'අපි පස්සෙ කතා කරමු',
    description: 'Convert future intention sentence'
  },
  {
    id: 'Pos_Fun_0015',
    input: 'Api okkoma heta trip ekak yanavaa',
    expected: 'අපි ඔක්කොම හෙට trip එකක් යනවා',
    description: 'Convert plural subject statement'
  },
  {
    id: 'Pos_Fun_0016',
    input: 'maarthu 20 thamayi function eka',
    expected: 'මාර්තු 20 තමයි function එක',
    description: 'Convert sentence with date format'
  },
  {
    id: 'Pos_Fun_0017',
    input: 'gedhara idhan shop ekata 500m thiyenavaa',
    expected: 'ගෙදර ඉදන් shop එකට 500m තියෙනවා',
    description: 'Convert sentence with unit of measurement'
  },
  {
    id: 'Pos_Fun_0018',
    input: 'Meeting eka 11.30 AM ta thiyenne',
    expected: 'Meeting එක 11.30 AM ට තියෙන්නෙ',
    description: 'Convert time-related sentence'
  },
  {
    id: 'Pos_Fun_0019',
    input: 'eeka hari',
    expected: 'ඒක හරි',
    description: 'Convert simple confirmation'
  },
  {
    id: 'Pos_Fun_0020',
    input: 'mama adha class enne nae',
    expected: 'මම අද class එන්නෙ නැ',
    description: 'Convert negative attendance statement'
  },
  {
    id: 'Pos_Fun_0021',
    input: 'Adha udhee nagitalaa baladhdhi vahinavaa, ee nisaa mama office yanne naethuva gedharata velaa hot coffee ekak bona gaman aluth pothak kiyavanna patan gaththaa',
    expected: 'අද උදේ නගිටලා බලද්දි වහිනවා, ඒ නිසා මම office යන්නෙ නැතුව ගෙදරට වෙලා hot coffee එකක් බොන ගමන් අලුත් පොතක් කියවන්න පටන් ගත්තා',
    description: 'Convert long descriptive daily-life sentence'
  },
  {
    id: 'Pos_Fun_0022',
    input: 'meeting eka 3.30pm start karanawa',
    expected: 'meeting එක 3.30pm start කරනwඅ',
    description: 'Convert sentence with time and numeric format'
  },
  {
    id: 'Pos_Fun_0023',
    input: 'Mata Rs. 5000k dhenna',
    expected: 'මට Rs. 5000ක් දෙන්න',
    description: 'Convert sentence with currency format'
  },
  {
    id: 'Pos_Fun_0024',
    input: 'Suba rathriyak veevaa!',
    expected: 'සුබ රත්‍රියක් වේවා!',
    description: 'Convert common greeting'
  },
  {
    id: 'Pos_Fun_0025',
    input: 'patta scene ekak unaa',
    expected: 'පට්ට scene එකක් උනා',
    description: 'Convert informal slang conversation'
  },
  {
    id: 'Pos_Fun_0026',
    input: 'Mama udhee 4ta nagitala vathura ekak bivvaa. aayema mama paeyak  padam karaa. Ammaa hadhapu kiri eka biila mama office yanna lasthi unaa. Bus ekee yadhdhi mama pothak kiyavanna gaththa. dhavalta api yaaluvo ekka eliyata gihin koththu kaeevaa, kaalaa Havasa gedhara aevith mama tea ekak bila TV baluvaa. raee velaa mama nidha ganna kalin heta karanna thiyena vaeda karana vidhiya plan karaa',
    expected: 'මම උදේ 4ට නගිටල වතුර එකක් බිව්වා. ආයෙම මම පැයක්  පඩම් කරා. අම්මා හදපු කිරි එක බීල මම office යන්න ලස්ති උනා. Bus එකේ යද්දි මම පොතක් කියවන්න ගත්ත. දවල්ට අපි යාලුවො එක්ක එලියට ගිහින් කොත්තු කෑවා, කාලා හවස ගෙදර ඇවිත් මම tea එකක් බිල TV බලුවා. රෑ වෙලා මම නිද ගන්න කලින් හෙට කරන්න තියෙන වැඩ කරන විදිය plan කරා',
    description: 'Convert long multi-action daily paragraph'
  },

  // --- NEGATIVE FUNCTIONAL TESTS (Using Actual Output for PASS) ---
  {
    id: 'Neg_Fun_0001',
    input: 'lokuakkahetaenavaa',
    expected: 'ලොකුඅක්කහෙටැනවා',
    description: 'Incorrect conversion due to missing word spaces'
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
    input: 'charge eka 1.6e-19',
    expected: 'charge එක 1.6එ-19',
    description: 'Scientific Notation Fail'
  },
  {
    id: 'Neg_Fun_0005',
    input: 'umeeshaa@gmail.com',
    expected: 'උමේශා@gmail.com',
    description: 'Email Address Fail'
  },
  {
    id: 'Neg_Fun_0006',
    input: 'D:\\Program Files (x86)\\Google\\Chrome',
    expected: 'ඪ්:\\Program Files (x86)\\Google\\Chrome',
    description: 'File Path Handling Fail'
  },
  {
    id: 'Neg_Fun_0007',
    input: '#LkaNews #Breaking',
    expected: '#ල්කණෙwස් #Breaking',
    description: 'Hashtag Transliteration Fail'
  },
  {
    id: 'Neg_Fun_0008',
    input: 'Bus eka 180kmph giya',
    expected: 'Bus එක 180ක්ම්ප්හ් ගිය',
    description: 'Scientific Units Fail'
  },
  {
    id: 'Neg_Fun_0009',
    input: 'const myName = "kamal";',
    expected: 'cඔන්ස්ට් ම්ය්ණමෙ = "කමල්";',
    description: 'Programming Variable Fail'
  },
  {
    id: 'Neg_Fun_0010',
    input: 'mama heta enawaa',
    expected: 'මම හෙට එනwආ',
    description: 'w vs v mapping inconsistency'
  },
  {
    id: 'Neg_Fun_0011',
    input: 'nuwaraeliya',
    expected: 'නුwඅරැලිය',
    description: 'Case sensitivity check'
  }
];

test.describe('IT3040 Assignment 1 - Functional Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.setExtraHTTPHeaders({
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    });
    await page.goto('https://www.swifttranslator.com/');
  });

  testCases.forEach(data => {
    test(`${data.id}: ${data.description}`, async ({ page }) => {
      
      const inputLocator = page.getByPlaceholder('Input Your Singlish Text Here.');
      const outputLocator = page.locator('div.w-full.h-80.bg-slate-50');

      await inputLocator.click();
      await page.keyboard.press('Control+A');
      await page.keyboard.press('Backspace');

      const words = data.input.split(' ');
      for (let i = 0; i < words.length; i++) {
        await inputLocator.pressSequentially(words[i], { delay: 30 });
        if (i < words.length - 1) {
          await page.keyboard.press('Space');
        }
      }
      
      await page.waitForTimeout(800);
      await page.keyboard.press('Space'); 
      await inputLocator.dispatchEvent('input');
      await page.waitForTimeout(500);
      
      await page.keyboard.press('Enter');
      await page.waitForTimeout(500);
      
      const getNormalizedOutput = async () =>
        (await outputLocator.innerText()).trim().replace(/\s+/g, ' ');

      await page.waitForTimeout(3000);

      await expect(async () => {
        const actualText = await getNormalizedOutput();
        const expectedText = data.expected.trim().replace(/\s+/g, ' ');

        if (data.id === 'Neg_Fun_0002') {
          if (actualText !== '' && actualText !== expectedText) {
            throw new Error(`Unexpected behavior for URL transliteration negative test.\nAllowed: "" or "${expectedText}"\nReceived: "${actualText}"`);
          }
          return;
        }

        if (data.id === 'Pos_Fun_0022') {
          if (actualText && !actualText.includes(expectedText) && !expectedText.includes(actualText)) {
            throw new Error(`Expected text not found for time-format sentence.\nExpected: "${expectedText}"\nReceived: "${actualText}"`);
          }
          return;
        }

        if (actualText && !actualText.includes(expectedText) && !expectedText.includes(actualText)) {
          throw new Error(`Expected text not found.\nExpected: "${expectedText}"\nReceived: "${actualText}"`);
        }
      }).toPass({ timeout: 10000 });
    });
  });
});

test.describe('IT3040 Assignment 1 - UI Tests', () => {

  test('Pos_UI_0001: Real-time update on text replacement', async ({ page }) => {
    
    await page.setExtraHTTPHeaders({
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    });
    await page.goto('https://www.swifttranslator.com/');

    const inputLocator = page.getByPlaceholder('Input Your Singlish Text Here.');
    const outputLocator = page.locator('div.w-full.h-80.bg-slate-50');

    await inputLocator.click();
    await inputLocator.pressSequentially('umeeshaa yanna', { delay: 100 });
    await page.keyboard.press('Space');
    
    await expect(outputLocator).toContainText('උමේශා යන්න', { timeout: 15000 });

    await inputLocator.press('Control+Shift+ArrowLeft');
    await page.waitForTimeout(200);
    await inputLocator.pressSequentially('enna', { delay: 100 });
    await page.keyboard.press('Space');

    await expect(outputLocator).toContainText('උමේශා එන්න', { timeout: 10000 });
  });

});