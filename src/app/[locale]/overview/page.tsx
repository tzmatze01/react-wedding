"use client";

import { useEffect, useState } from "react";

const thStyle = {
  padding: "0.75rem",
  textAlign: "left" as const,
  borderBottom: "1px solid #ddd",
};

const tdStyle = {
  padding: "0.75rem",
  borderBottom: "1px solid #eee",
};
type Guest = {
  role_id: number;
  coming_buenos_aires: string;
  coming_berlin: string;
  email: string;
  name: string;
  surname: string;
};
export default function Home() {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGuests = async () => {
      try {
        const response = await fetch("/api/overview");
        const data = (await response.json()) as Guest[];

        const parsedData: Guest[] = data.map((item: any) => ({
          role_id: item.role_id,
          coming_buenos_aires: item.coming_buenos_aires,
          coming_berlin: item.coming_berlin,
          email: item.email,
          name: item.name,
          surname: item.surname,
        }));

        setGuests(parsedData);

        console.log("amina: " + JSON.stringify(data, null, 2));
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGuests();
  }, []);

  return (
    <main style={{ padding: "2rem" }}>
      <h1 style={{ marginBottom: "1rem" }}>Attendees</h1>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          border: "1px solid #ddd",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f5f5f5" }}>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Surname</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Buenos Aires</th>
            <th style={thStyle}>Berlin</th>
            <th style={thStyle}>Role ID</th>
          </tr>
        </thead>
        <tbody>
          {guests.map((guest, index) => (
            <tr key={index}>
              <td style={tdStyle}>{guest.name}</td>
              <td style={tdStyle}>{guest.surname}</td>
              <td style={tdStyle}>{guest.email}</td>
              <td style={tdStyle}>{guest.coming_buenos_aires}</td>
              <td style={tdStyle}>{guest.coming_berlin}</td>
              <td style={tdStyle}>{guest.role_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
