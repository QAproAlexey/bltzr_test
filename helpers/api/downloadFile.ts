import { createWriteStream } from "fs";
import fetch from 'node-fetch';
import { pipeline } from "stream";
import { promisify } from "util";

export const downloadFile = async (link, pathToSave) => {
    const streamPipeline = promisify(pipeline);
    const response = await fetch(link);

    if (!response.ok) throw new Error(`Downloading of file failed - ${response.status} ${response.statusText}`);

    await streamPipeline(response.body, createWriteStream(pathToSave))
};