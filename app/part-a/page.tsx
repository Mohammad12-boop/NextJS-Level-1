import Link from "next/link";
import { readFile } from "node:fs/promises";
import path from "node:path";
import AnswerContent from "./AnswerContent";

export const metadata = { title: "Part A — Questions" };

export default async function PartAPage() {
  // A fixed, public learning document, read only on the server. No user-provided paths.
  const document = await readFile(path.join(process.cwd(), "Part_A", "answers.md"), "utf8");
  const questions = document.replace(/\r\n/g, "\n").split(/^### Question /m).slice(1);

  return (
    <main className="page-shell">
      <h1 className="mb-6 text-2xl font-bold">Part A — Questions and Answers</h1>
      <p className="mb-8 underline"><Link href="/">Back to Level 1</Link></p>
      {questions.map((question) => {
        const newline = question.indexOf("\n");
        const number = question.slice(0, newline).trim();
        return (
          <section key={number} className="mb-10 min-w-0 space-y-4 leading-7" aria-labelledby={`question-${number}`}>
            <h2 id={`question-${number}`} className="text-xl font-semibold">Question {number}</h2>
            <AnswerContent text={question.slice(newline)} />
          </section>
        );
      })}
      <p className="intro-links"><Link href="/">Back to Level 1</Link></p>
    </main>
  );
}
