import { mails } from "@/app/(core)/journalling/_components/dummy-data";
import { useState } from "react";

export const useJournal = () => {
  // TODO set type of journal
  const [journals, setJournals] = useState<any[]>(mails);

  const selectedJournal = "";

  return { journals, setJournals, selectedJournal };
};
