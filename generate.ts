import { GoFileGenerator, GO_COMMON_PRESET } from '@asyncapi/modelina'

import * as path from 'path'
import * as fs from 'fs'

async function defaultGenerateModels(input: any) {
  const generator = new GoFileGenerator({
    presets: [
      {
        preset: GO_COMMON_PRESET,
        options: {
          addJsonTag: true,
        },
      },
    ],
  })
  await generator.generateToFiles(input, './models', { packageName: 'models' })
}

async function generate() {
  const content = fs.readFileSync(path.resolve('./scheme.json'), 'utf-8')

  await defaultGenerateModels(JSON.parse(content))
}

generate().catch((e) => console.error(e))
