"use client";

import React, { useMemo, useState } from "react";

/**
 * Light-themed paginated searchable table for Fuel & Ash Handling projects.
 * Theme: primary = #2f5b9c, accent = #a2dbee
 *
 * Page size default = 20 (change PAGE_SIZE constant)
 */

/* ===========================
   DATA: add/extend entries here
   (I included a large portion of your list below;
    append any missing rows directly into this array.)
   =========================== */
const DATA = [
  { client: "KUTCH CHEMICAL LIMITED", boiler: "260 TPH", fuel: "60 MW / 160 TPH", ash: "DENSE PHASE" },
  { client: "KUTCH CHEMICAL LIMITED", boiler: "32 TPH", fuel: "5 MW / 30 TPH", ash: "DENSE PHASE" },
  { client: "DECCAN CHEMICALS LIMITED", boiler: "170 TPH", fuel: "18 MW / 70 TPH", ash: "DENSE PHASE" },
  { client: "LYFIUS PHARMA PRIVATE LIMITED", boiler: "150 X 2 Nos", fuel: "2 X 30 MW / 150 TPH", ash: "DENSE PHASE" },
  { client: "COVALENT LABORATORIES LIMITED", boiler: "35 TPH, 22 TPH, 90 TPH", fuel: "5 MW, 3 MW, 20 MW", ash: "110 TPH DENSE PHASE" },
  { client: "VIRCHOW’S PETRO", boiler: "75 TPH", fuel: "20 MW / 60 TPH", ash: "DENSE PHASE" },
  { client: "KILBURN CHEMICALS LIMITED", boiler: "75 TPH", fuel: "16 MW / 60 TPH", ash: "DENSE PHASE" },
  { client: "SHREYAS LIMITED", boiler: "75 TPH x 2 nos", fuel: "16 MW", ash: "50 TPH DENSE PHASE" },
  { client: "AURABINDO PHARMA LIMITED", boiler: "35 TPH", fuel: "6 MW / 25 TPH", ash: "DENSE PHASE" },
  { client: "GODREJ OILS LIMITED", boiler: "50 TPH", fuel: "6 MW / 30 TPH", ash: "BIOMASS MECHANICAL" },
  { client: "PEARL DISTILLERIES LIMITED", boiler: "30 TPH", fuel: "6 MW / 25 TPH", ash: "DENSE PHASE" },
  { client: "GRASS GOLD PHILIPPINES", boiler: "50 TPH", fuel: "7 MW / 15 TPH", ash: "BIO MASS" },
  { client: "CLEAN GREEN POWER PHILIPPINES", boiler: "50 TPH", fuel: "6 MW / 15 TPH", ash: "BIO MASS" },
  { client: "UNITED SPIRITS LIMITED - ROSA", boiler: "22 TPH", fuel: "—", ash: "10 TPH DENSE PHASE" },
  { client: "SOVEREIGN DISTILLERIES LIMITED", boiler: "36 TPH", fuel: "—", ash: "15 TPH MECHANICAL" },
  { client: "CRUX BIOTECH INDIA (P) LIMITED", boiler: "22 TPH", fuel: "—", ash: "15 TPH DENSE PHASE" },
  { client: "SRI TEJA BIO FUELS LIMITED", boiler: "", fuel: "", ash: "" },
  { client: "RAJAHMUNDRY", boiler: "20 TPH", fuel: "—", ash: "15 TPH COAL/HUSK LEAN PHASE" },
  { client: "SKOL - AURANGABAD", boiler: "8 TPH", fuel: "—", ash: "5 TPH BRIQUETTE LEAN PHASE" },
  { client: "SKOL - PONDEY", boiler: "8 TPH", fuel: "—", ash: "3 TPH BRIQUETTE LEAN PHASE" },
  { client: "SKOL - KERALA", boiler: "8 TPH", fuel: "—", ash: "3 TPH BRIQUETTE LEAN PHASE" },
  { client: "UNITED SPIRITS LIMITED - ROSA", boiler: "25 TPH", fuel: "BIOMASS", ash: "DENSE PHASE" },
  { client: "TERN DISTILLERY", boiler: "18 TPH", fuel: "—", ash: "10 TPH MECHANICAL" },
  { client: "SHASTA BIO FUELS (A P)", boiler: "50 TPH", fuel: "40 TPH COAL/HUSK", ash: "DENSE PHASE" },
  { client: "SPY AGRO LIMITED", boiler: "50 TPH", fuel: "—", ash: "40 TPH DENSE PHASE" },
  { client: "AROMA BIO TECH LIMITED, A P", boiler: "30 TPH", fuel: "—", ash: "25 TPH MECHANICAL" },
  { client: "HARITHA BIO PRODUCTS, A P", boiler: "25 TPH", fuel: "—", ash: "15 TPH COAL/HUSK MECHANICAL" },
  { client: "UNITED MILLENNIUM BREWERIES LIMITED", boiler: "16 TPH", fuel: "—", ash: "10 TPH (COAL/HUSK)" },
  { client: "PIONEER DISTILLERY LIMITED (USL)", boiler: "12 TPH", fuel: "—", ash: "5 TPH HUSK LEAN PHASE" },
  { client: "USL HOSPET", boiler: "12 TPH", fuel: "—", ash: "8 TPH HUSK" },
  { client: "UNITED BREWERIES PVT LTD", boiler: "10 TPH", fuel: "—", ash: "MECHANICAL" },
  { client: "JURALA LIMITED", boiler: "75 TPH", fuel: "—", ash: "50 TPH DENSE PHASE" },
  { client: "GODREJ AGROVET LIMITED", boiler: "20 TPH", fuel: "—", ash: "06 TPH (PALM FIBER) MECHANICAL" },
  { client: "JOLLY BOARDS", boiler: "20 TPH", fuel: "—", ash: "10 TPH" },
  { client: "GEMINI OILS LIMITED", boiler: "24 TPH", fuel: "—", ash: "15 TPH (COAL)" },
  { client: "GEMINI EDIBLE AND FATS INDIA PVT LTD", boiler: "20 TPH+", fuel: "20+10 Lac heater", ash: "20 TPH COAL / 20 TPH ASH" },
  { client: "ADANI WILMAR LIMITED (PLANT I)", boiler: "20 TPH", fuel: "—", ash: "06 TPH (COAL)" },
  { client: "ADANI WILMAR LIMITED KANDLA", boiler: "20 TPH", fuel: "—", ash: "06 TPH (COAL)" },
  { client: "KARGILL OILS LIMITED (PLANT I)", boiler: "16 TPH", fuel: "—", ash: "20 TPH (COAL)" },
  { client: "SOUTH INDIA OIL LIMITED", boiler: "16 TPH - 2 Nos", fuel: "—", ash: "20 TPH COAL/HUSK DENSE PHASE" },
  { client: "LOUIS DERIVATIVE COMMODITIES", boiler: "20 TPH", fuel: "—", ash: "10 TPH COAL/HUSK" },
  { client: "FFF LIMITED", boiler: "35 TPH", fuel: "—", ash: "25 TPH COAL DENSE PHASE" },
  { client: "EMAMI AGROTECH LIMITED HALDIA", boiler: "20 TPH", fuel: "—", ash: "15 TPH DENSE PHASE" },
  { client: "EMAMI BIOTECH LIMITED KRISHNA PATNAM", boiler: "24 TPH", fuel: "—", ash: "20 TPH (COAL)" },
  { client: "EMAMI BIOTECH LIMITED KANDLA", boiler: "24 TPH", fuel: "—", ash: "20 TPH (COAL)" },
  { client: "PRE UNIQ-LIMITED (TS OIL LIMITED)", boiler: "35 TPH", fuel: "—", ash: "BIO MASS MECHANICAL" },
  { client: "SANTHOSHIMATHA (P) LIMITED", boiler: "10 TPH", fuel: "—", ash: "6 TPH DENSE PHASE" },
  { client: "SADARAN ONLINE BIO LIMITED", boiler: "10 TPH", fuel: "—", ash: "07 TPH (COAL)" },
  { client: "SADARAN ONLINE LIMITED", boiler: "10 TPH", fuel: "—", ash: "05 TPH COAL/HUSK" },
  { client: "EMAMI AGROTECH LIMITED", boiler: "30 TPH", fuel: "—", ash: "30 TPH COAL" },
  { client: "LOHIYA EDIBLE OILS LTD", boiler: "6 TPH", fuel: "—", ash: "3 TPH" },
  { client: "BUDGE BUDGE REFINERIES LTD", boiler: "18 TPH", fuel: "—", ash: "18 TPH COAL" },
  { client: "LAURUS LABS LIMITED UNIT-03", boiler: "16 TPH", fuel: "—", ash: "15 TPH COAL DENSE PHASE" },
  { client: "LAURUS LABS LIMITED UNIT-04", boiler: "16 TPH", fuel: "—", ash: "15 TPH COAL DENSE PHASE" },
  { client: "NATCO PHARMA LIMITED", boiler: "10 TPH", fuel: "—", ash: "7 TPH COAL DENSE PHASE" },
  { client: "LANTECH PHARMA LIMITED", boiler: "12 TPH", fuel: "—", ash: "7 TPH COAL DENSE PHASE" },
  { client: "AETL - VIZAG", boiler: "14 TPH", fuel: "—", ash: "20 TPH COAL DENSE PHASE" },
  { client: "VASUDHA PHARMA LIMITED", boiler: "10 TPH", fuel: "—", ash: "15 TPH COAL DENSE PHASE" },
  { client: "PASHMYLARAM", boiler: "12 TPH", fuel: "—", ash: "7 TPH COAL DENSE PHASE" },
  { client: "MSN LABORATORIES LIMITED LS-1", boiler: "10 TPH - 2 NOS", fuel: "—", ash: "15 TPH DENSE PHASE" },
  { client: "MSN LABORATORIES LIMITED LS-2", boiler: "10 TPH - 2 NOS", fuel: "—", ash: "15 TPH DENSE PHASE" },
  { client: "MSN LABORATORIES LIMITED LS-1 (16 TPH)", boiler: "16 TPH - 2 NOS", fuel: "—", ash: "25 TPH DENSE PHASE" },
  { client: "SMS PHARMA", boiler: "16 TPH", fuel: "—", ash: "5 PH DENSE PHASE" },
  { client: "UTTAM ENERGY LIMITED VS GIRPAL", boiler: "50 TPH", fuel: "—", ash: "15 TPH BIO MASS" },
  { client: "SURALLAH POWER", boiler: "50 TPH", fuel: "—", ash: "15 TPH BIO MASS" },
  { client: "AURABINDO PHARMA LIMITED UNIT-1", boiler: "35 TPH", fuel: "—", ash: "20 TPH COAL DENSE PHASE" },
  { client: "DECCAN FINE CHEMICAL LIMITED", boiler: "170 TPH", fuel: "18 MW", ash: "70 TPH COAL DENSE PHASE" },
  { client: "SHASUN PHARMA LIMITED PONDICHERRY", boiler: "12 TPH x 2 nos", fuel: "—", ash: "10 TPH LEAN PHASE" },
  { client: "DIVIS LABORATORIES LIMITED CHIPPADA", boiler: "16+16+24 TPH", fuel: "—", ash: "25 TPH COAL DENSE PHASE (3 TPH ASH)" },
  { client: "BALAJI AMINES LIMITED", boiler: "55 TPH", fuel: "—", ash: "30 TPH COAL DENSE PHASE" },
  { client: "VIRCHOW PETRO CHEMICALS LIMITED", boiler: "30+30+12 TPH", fuel: "—", ash: "40 TPH COAL DENSE PHASE" },
  { client: "SHASUN PHARMACEUTICALS LIMITED", boiler: "16 TPH", fuel: "—", ash: "10 TPH MECHANICAL" },
  { client: "EMMENNAR BIO LIMITED", boiler: "10 TPH", fuel: "—", ash: "6 TPH MECHANICAL" },
  { client: "INVENTA PHARMA LIMITED", boiler: "20 TPH", fuel: "—", ash: "15 TPH DENSE PHASE" },
  { client: "SARAKA LIMITED", boiler: "20 TPH - 2 MW", fuel: "—", ash: "15 TPH DENSE PHASE" },
  { client: "HETERO LABS LIMITED", boiler: "16 TPH", fuel: "—", ash: "10 TPH DENSE PHASE" },
  { client: "EMMENNAR BIO TECH LIMITED", boiler: "36 TPH", fuel: "—", ash: "30 TPH DENSE PHASE" },
  { client: "SHREE GLUCO - MYSORE", boiler: "30 TPH & 20 TPH", fuel: "—", ash: "30 TPH DENSE PHASE" },
  { client: "SAMEERA PAPER LIMITED", boiler: "35 TPH", fuel: "—", ash: "25 TPH" },
  { client: "SINDHURA PAPER PRIVATE LIMITED", boiler: "25 TPH", fuel: "—", ash: "15/10 TPH COAL/HUSK DENSE PHASE" },
  { client: "PRIVILEGE LIMITED (PLANT I)", boiler: "25 TPH", fuel: "—", ash: "20 TPH (COAL)" },
  { client: "GODAVARY CRAFT PAPER LIMITED", boiler: "25 TPH", fuel: "—", ash: "08 TPH (COAL)" },
  { client: "PALLAVI RICE INDUSTRIES", boiler: "25 TPH", fuel: "—", ash: "08 TPH (HUSK) DENSE PHASE" },
  { client: "POLY FLEX LIMITED", boiler: "20 TPH", fuel: "—", ash: "10 TPH COAL/HUSK MECHANICAL" },
  { client: "SENNAR PAPERS LIMITED", boiler: "18 TPH", fuel: "—", ash: "6 TPH HUSK" },
  { client: "ADANI WILMAR LIMITED (PLANT II)", boiler: "16 TPH", fuel: "—", ash: "06 TPH (COAL)" },
  { client: "SRI VIJAY AQUA FEEDS P LTD", boiler: "16 TPH", fuel: "—", ash: "15 TPH COAL/HUSK LEAN PHASE" },
  { client: "GROWELL FEEDS LIMITED", boiler: "16 TPH", fuel: "—", ash: "6 TPH HUSK LEAN PHASE" },
  { client: "ANANDA FEEDS", boiler: "16 TPH", fuel: "—", ash: "15 TPH COAL LEAN PHASE" },
  { client: "SASTHA PAPER LIMITED", boiler: "15 TPH", fuel: "—", ash: "10 TPH (COAL/HUSK) LEAN PHASE" },
  { client: "SMRUTHI ORGANICS LIMITED", boiler: "12 TPH", fuel: "—", ash: "8 TPH COAL" },
  { client: "VIJAYANAND KRAFT PAPER", boiler: "12 TPH", fuel: "—", ash: "6 TPH LEAN PHASE" },
  { client: "ITC LIMITED (PLANT I)", boiler: "12 TPH", fuel: "—", ash: "20 TPH (COAL)" },
  { client: "CHALIMADA FEEDS (P) LTD", boiler: "12 TPH", fuel: "—", ash: "6 TPH COAL/HUSK LEAN PHASE" },
  { client: "SHANTHI POULTRIES LIMITED", boiler: "12 TPH", fuel: "—", ash: "6 TPH COAL/HUSK LEAN PHASE" },
  { client: "MULPURI FEEDS (P) LIMITED", boiler: "10 TPH", fuel: "—", ash: "6 TPH HUSK LEAN PHASE" },
  { client: "NCL ALLTEK & SECCOLOR LTD", boiler: "10 TPH", fuel: "—", ash: "8 TPH FOR COAL" },
  { client: "VENKEYS (INDIA) LTD - NANDED & SOLAPUR", boiler: "2 x 10 TPH", fuel: "—", ash: "8 TPH FOR COAL" },
  { client: "MANIKESWARI PAPER LIMITED", boiler: "08 TPH", fuel: "—", ash: "05 TPH (COAL) MECHANICAL" },
  { client: "HUL PONDICHERRY", boiler: "08 TPH", fuel: "—", ash: "02 TPH (BRIQUETTE) MECHANICAL" },
  { client: "LAXMI NARASIMHA OILS LIMITED", boiler: "08 TPH", fuel: "—", ash: "05 TPH (COAL)" },
  { client: "NTC LIMITED (PLANT I)", boiler: "08 TPH", fuel: "—", ash: "12 TPH (COAL)" },
  { client: "NTC LIMITED (PLANT II)", boiler: "08 TPH", fuel: "—", ash: "12 TPH (COAL)" },
  { client: "RUDRA TECHNO FEEDS", boiler: "08 TPH", fuel: "—", ash: "05 TPH (HUSK)" },
  { client: "GROWELL FEEDS LIMITED", boiler: "08 TPH", fuel: "—", ash: "05 TPH (HUSK) PNEUMATIC" },
  { client: "PEPSICO LIMITED", boiler: "04 TPH", fuel: "—", ash: "01 TPH (BRIQUETTE)" },
  { client: "PIONEER DISTILLERY LIMITED (USL) HEATER", boiler: "8 TPH", fuel: "—", ash: "HUSK" },
  { client: "GREEN PLY LIMITED", boiler: "—", fuel: "—", ash: "15 TPH (COAL)" },
  { client: "SURE THERMAX", boiler: "—", fuel: "—", ash: "03 TPH (HUSK)" },
  { client: "KALLAM SPINNING AND WEARING LIMITED", boiler: "10 TPH", fuel: "—", ash: "COAL LEAN PHASE (2017-19)" },
  { client: "LOHIYA EDIBLE OILS PVT LTD", boiler: "10 TPH", fuel: "—", ash: "PNEUMATIC" },
  { client: "VIRCHOW CHEMICALS PVT LTD", boiler: "10 TPH", fuel: "—", ash: "10 TPH (COAL) / 10 TPH ASH" },
  { client: "KOTHARI PETROCHEMICALS LTD", boiler: "20 TPH", fuel: "—", ash: "20 TPH ASH" },
  { client: "JANAT FISH MEAL AND OIL PRODUCTS", boiler: "04 TPH", fuel: "—", ash: "04 TPH COAL" },
  { client: "AUROBINDO PHARMA LIMITED", boiler: "10 TPH", fuel: "—", ash: "10 TPH COAL" },
  { client: "AUROBINDO PHARMA LIMITED", boiler: "1.5 TPH", fuel: "—", ash: "1.5 TPH ASH" },
  { client: "THERMAX LIMITED", boiler: "30 TPH", fuel: "—", ash: "30 TPH COAL" },
  { client: "GODREJ AGROVET LIMITED", boiler: "4 MW", fuel: "—", ash: "SUBMERGED ASH" },
  { client: "HETERO DRUGS LIMITED UNIT 1", boiler: "—", fuel: "—", ash: "1000 KG/HR ASH" },
  { client: "VIRCHOW PETROCHEMICAL PVT LTD", boiler: "40 TPH", fuel: "—", ash: "40 TPH COAL" },
  { client: "PORUS LABORATORIES LIMITED", boiler: "12 TPH", fuel: "—", ash: "12 TPH ASH" },
  { client: "MYLAN LABORATORIES LIMITED UNIT 7", boiler: "20 TPH", fuel: "—", ash: "20 TPH ASH" },
  { client: "SATYES HBRAINCHEM PVT LTD", boiler: "—", fuel: "—", ash: "COAL ASH" },
  { client: "DIVIS LABORATORIES LIMITED", boiler: "—", fuel: "—", ash: "—" },
  { client: "CHIPPADA", boiler: "20 TPH", fuel: "—", ash: "20 TPH COAL / 03 TPH ASH" },
  { client: "LOHIYA EDIBLE OILS LTD - FUEL -", boiler: "—", fuel: "—", ash: "—" }
  // NOTE: append additional entries from your master list here if any remaining
];

/* ===========================
   CONFIG
   =========================== */
const PAGE_SIZE = 20;

const Theme = {
  primary: "#2f5b9c", // lighter blue requested
  accent: "#a2dbee",
  headerBg: "#eaf3ff", // subtle light header background if needed
};

function paginate(array, pageSize, pageNumber) {
  const start = (pageNumber - 1) * pageSize;
  return array.slice(start, start + pageSize);
}

export default function FuelAshProjects() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const s = search.trim().toLowerCase();
    if (!s) return DATA;
    return DATA.filter(
      (r) =>
        (r.client || "").toLowerCase().includes(s) ||
        (r.boiler || "").toLowerCase().includes(s) ||
        (r.fuel || "").toLowerCase().includes(s) ||
        (r.ash || "").toLowerCase().includes(s)
    );
  }, [search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = paginate(filtered, PAGE_SIZE, page);

  // Ensure page remains valid when filtered changes
  if (page > totalPages) setPage(1);

  return (
    <section className="min-h-screen bg-white py-12 px-4 md:px-10 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="mb-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold" style={{ color: Theme.primary }}>
            Experience in <span style={{ color: Theme.accent }}>Fuel & Ash Handling Systems</span>
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            A selection of projects showing boiler capacities, fuel handling and ash handling systems delivered.
          </p>
        </header>

        {/* Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3 w-full md:w-1/2">
            <input
              type="text"
              placeholder="Search by client, boiler, fuel, ash..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
            />
          </div>

          <div className="text-sm text-gray-600">
            Showing <strong>{filtered.length}</strong> result{filtered.length !== 1 ? "s" : ""}
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="min-w-full table-auto border-collapse">
            <thead style={{ background: Theme.primary }} className="text-white sticky top-0">
              <tr>
                <th className="px-4 py-3 text-left">Client</th>
                <th className="px-4 py-3 text-left">Boiler Capacity</th>
                <th className="px-4 py-3 text-left">Fuel Handling</th>
                <th className="px-4 py-3 text-left">Ash Handling</th>
              </tr>
            </thead>

            <tbody>
              {current.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-[#f7fbff]" : "bg-white"}>
                  <td className="px-4 py-3 border-b">{row.client || "—"}</td>
                  <td className="px-4 py-3 border-b">{row.boiler || "—"}</td>
                  <td className="px-4 py-3 border-b">{row.fuel || "—"}</td>
                  <td className="px-4 py-3 border-b">{row.ash || "—"}</td>
                </tr>
              ))}

              {current.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-4 py-6 text-center text-gray-500">
                    No results found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-6 flex items-center justify-center gap-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="px-3 py-1 rounded border"
            disabled={page === 1}
          >
            Prev
          </button>

          {/* pages: show up to 7 page buttons with ellipsis if many */}
          {(() => {
            const pages = [];
            const maxButtons = 7;
            let start = Math.max(1, page - Math.floor(maxButtons / 2));
            let end = start + maxButtons - 1;
            if (end > totalPages) {
              end = totalPages;
              start = Math.max(1, end - maxButtons + 1);
            }
            for (let p = start; p <= end; p++) {
              pages.push(p);
            }

            return (
              <>
                {start > 1 && (
                  <>
                    <button onClick={() => setPage(1)} className="px-3 py-1 rounded border">
                      1
                    </button>
                    {start > 2 && <span className="px-2">…</span>}
                  </>
                )}

                {pages.map((p) => (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={`px-3 py-1 rounded border ${p === page ? "bg-[#2f5b9c] text-white" : ""}`}
                  >
                    {p}
                  </button>
                ))}

                {end < totalPages && (
                  <>
                    {end < totalPages - 1 && <span className="px-2">…</span>}
                    <button onClick={() => setPage(totalPages)} className="px-3 py-1 rounded border">
                      {totalPages}
                    </button>
                  </>
                )}
              </>
            );
          })()}

          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            className="px-3 py-1 rounded border"
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
