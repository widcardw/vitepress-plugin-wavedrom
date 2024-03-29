import MarkdownIt from "markdown-it";

const wavedromPlugin: MarkdownIt.PluginSimple = (md) => {
  const temp = md.renderer.rules.fence?.bind(md.renderer.rules);
  md.renderer.rules.fence = (tokens, index, options, env, slf) => {
    const token = tokens[index];

    if (token.info.trim() === "wavedrom") {
      try {
        const content = token.content.trim();
        return `<WavedromVue id="${index}" parent-text='${content.toString()}'></WavedromVue>`;
        // return `<pre>${content}</pre>`
      } catch (err) {
        return `<pre>${err}</pre>`;
      }
    }
    return temp(tokens, index, options, env, slf);
  };
}

export default wavedromPlugin
