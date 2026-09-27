// Render only the Markdown conventions used in the existing written answers.
// React escapes text; this renderer never inserts raw HTML.
function inline(text: string) {
  return text.split(/(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\(https:\/\/[^)]+\))/g).map((part, index) => {
    if (part.startsWith("`")) return <code key={index}>{part.slice(1, -1)}</code>;
    if (part.startsWith("**")) return <strong key={index}>{part.slice(2, -2)}</strong>;
    const link = part.match(/^\[([^\]]+)\]\((https:\/\/[^)]+)\)$/);
    if (link) return <a key={index} className="underline" href={link[2]}>{link[1]}</a>;
    return part;
  });
}

export default function AnswerContent({ text }: { text: string }) {
  return text.trim().split(/\n\s*\n/).map((block, index) => {
    if (block.startsWith("```")) {
      const code = block.split("\n").slice(1, -1).join("\n");
      return <pre key={index} className="overflow-x-auto rounded border p-3"><code>{code}</code></pre>;
    }
    if (block.startsWith("|")) {
      const rows = block.split("\n").map((row) => row.split("|").slice(1, -1).map((cell) => cell.trim()));
      return (
        <div key={index} className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead><tr>{rows[0].map((cell, i) => <th key={i} scope="col" className="border p-2">{inline(cell)}</th>)}</tr></thead>
            <tbody>{rows.slice(2).map((row, i) => <tr key={i}>{row.map((cell, j) => <td key={j} className="border p-2">{inline(cell)}</td>)}</tr>)}</tbody>
          </table>
        </div>
      );
    }
    if (block.startsWith("- ")) {
      return <ul key={index} className="list-disc space-y-2 pl-5">{block.split("\n").map((line, i) => <li key={i}>{inline(line.replace(/^- /, ""))}</li>)}</ul>;
    }
    return <p key={index}>{inline(block)}</p>;
  });
}
