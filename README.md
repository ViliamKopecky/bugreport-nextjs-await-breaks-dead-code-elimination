# Bug report

## Steps

```bash
npx create-next-app@canary --ts nextjs-await-breaks-dead-code-elimination
cd nextjs-await-breaks-dead-code-elimination
```

## Reproduce the bug

```bash
rm -rf .next
npm run build
npx prettier --write './.next/**/*.js'
echo ""
echo "found wrong things:"
grep -rnw './.next/static' -e 'bug-check:server-only'
```

This should find one occurence of `console.log("bug-check:server-only");` in browser build, which is not good.

If you remove `await new Promise((res) => res(null));` from `./bug.ts` than the dead code elimination works ok.