import * as fs from "fs";

import { downloadMetamask } from "../extensions/extensionsHelpers";

require('dotenv').config();

const pathToDownloadMetamask = './extensions/metamask.zip';
const pathToExtractedMetamask = './extensions/metamask';

async function globalSetup() {
    const metamaskExists = await fs.existsSync(pathToExtractedMetamask);

    if (!metamaskExists) {
        await downloadMetamask(pathToDownloadMetamask);
    }
}

export default globalSetup;