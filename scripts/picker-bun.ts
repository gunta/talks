import { file, spawn } from "bun";
import prompts from 'prompts';

async function startPicker(args: string[]) {
    const currentDir = import.meta.dir;
    const parentDir = `${currentDir}/..`;

    const folders = await Bun.file(parentDir).directory();
    const sortedFolders = folders
        .filter((folder) => folder.match(/^\d{4}-/))
        .sort((a, b) => -a.localeCompare(b));

    const result = args.includes('-y')
        ? { folder: sortedFolders[0] }
        : await prompts([
            {
                type: 'select',
                name: 'folder',
                message: 'Pick a folder',
                choices: sortedFolders.map(folder => ({ title: folder, value: folder })),
            },
        ]);

    const filteredArgs = args.filter(arg => arg !== '-y');

    if (result.folder) {
        if (filteredArgs[0] === 'dev') {
            const filePath = `${parentDir}/${result.folder}/src/slides.md`;
            await spawn(['code', filePath], { stdio: 'inherit' });
        }

        const cwd = `${parentDir}/${result.folder}/src`;
        await spawn(['bun', 'run', ...filteredArgs], { cwd, stdio: 'inherit' });
    }
}

// ... existing code ...

await startPicker(Bun.argv.slice(2));