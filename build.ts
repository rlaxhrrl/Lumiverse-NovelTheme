// Frontend-only extension: one browser bundle.
const r = await Bun.build({ entrypoints: ['src/frontend.ts'], outdir: 'dist', target: 'browser', format: 'esm', naming: 'frontend.js', minify: false })
if (!r.success) { console.error(r.logs); process.exitCode = 1 }
for (const o of r.outputs) console.log(o.path.split('/').pop(), (o.size / 1024).toFixed(1), 'KB')

// Same code as a plain script, for trying the look in a page without installing.
const p = await Bun.build({ entrypoints: ['src/preview.ts'], outdir: 'dist', target: 'browser', format: 'iife', naming: 'preview.js', minify: true })
if (!p.success) { console.error(p.logs); process.exitCode = 1 }
