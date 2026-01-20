"use client";

import { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

type Guest = {
  role_id: string | number;
  coming_buenos_aires: string;
  coming_berlin: string;
  email: string;
  name: string;
  questions: string;
  surname: string;
};

type SortOrder = "asc" | "desc" | null;

export default function AttendeesTable() {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [sortOrder, setSortOrder] = useState<SortOrder>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGuests = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/overview");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = (await response.json()) as Guest[];
        const parsedData: Guest[] = data.map((item: Guest) => ({
          role_id: item.role_id,
          coming_buenos_aires: item.coming_buenos_aires,
          coming_berlin: item.coming_berlin,
          email: item.email,
          name: item.name,
          questions: item.questions,
          surname: item.surname,
        }));
        setGuests(parsedData);
        console.log("amina: " + JSON.stringify(data, null, 2));
      } catch (err) {
        console.error(err);
        setError(err instanceof Error ? err.message : "Failed to fetch guests");
      } finally {
        setLoading(false);
      }
    };
    fetchGuests();
  }, []);

  const sortedGuests = [...guests].sort((a, b) => {
    if (sortOrder === null) return 0;

    const aValue = a.coming_buenos_aires || "";
    const bValue = b.coming_buenos_aires || "";

    if (sortOrder === "asc") {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const toggleSort = () => {
    setSortOrder((current) => {
      if (current === null) return "asc";
      if (current === "asc") return "desc";
      return null;
    });
  };

  const SortIcon = () => {
    if (sortOrder === "asc") return <ArrowUp className="ml-2 h-4 w-4" />;
    if (sortOrder === "desc") return <ArrowDown className="ml-2 h-4 w-4" />;
    return <ArrowUpDown className="ml-2 h-4 w-4" />;
  };

  if (loading) {
    return (
      <main className="p-8 text-black">
        <h1 className="mb-4 text-2xl font-bold">Attendees</h1>
        <p>Loading guests...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="p-8 text-black">
        <h1 className="mb-4 text-2xl font-bold">Attendees</h1>
        <p className="text-red-500">Error: {error}</p>
      </main>
    );
  }

  return (
    <main className="p-8 text-black">
      <h1 className="mb-4 text-2xl font-bold">Attendees</h1>
      <div className="rounded-md border">
        <Table>
          <TableHeader className="text-black">
            <TableRow>
              <TableHead className="text-black">Name</TableHead>
              <TableHead className="text-black">Surname</TableHead>
              <TableHead className="text-black">Email</TableHead>
              <TableHead className="text-black">
                <Button variant="ghost" onClick={toggleSort} className="flex items-center p-0 hover:bg-transparent">
                  Buenos Aires
                  <SortIcon />
                </Button>
              </TableHead>
              <TableHead className="text-black">Questions</TableHead>
              <TableHead className="text-black">Role ID</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedGuests.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center">
                  No guests found
                </TableCell>
              </TableRow>
            ) : (
              sortedGuests.map((guest, index) => (
                <TableRow key={index}>
                  <TableCell>{guest.name}</TableCell>
                  <TableCell>{guest.surname}</TableCell>
                  <TableCell>{guest.email}</TableCell>
                  <TableCell>{guest.coming_buenos_aires}</TableCell>
                  <TableCell>{guest.questions}</TableCell>
                  <TableCell>{guest.role_id}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
