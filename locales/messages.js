const messages: Record<string, object> = {};

async function loadMessages(locale: string) {
  const module = await import(`./${locale}.json`);
  messages[locale] = module.default;
}

const locales = ["en", "fr", "it", "la"];

(async () => {
  for (const locale of locales) {
    await loadMessages(locale);
  }

  console.log(messages);
})();

export default messages;
