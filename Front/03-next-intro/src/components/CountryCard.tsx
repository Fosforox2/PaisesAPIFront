import Link from "next/link";

export type Country = {
  cca3: string;
  name: {
    common: string;
  };
  flags: {
    png: string;
    alt?: string;
  };
};

type CountryCardProps = {
  country: Country;
};

export default function CountryCard({ country }: CountryCardProps) {
  const slug = encodeURIComponent(country.name.common.toLowerCase());

  return (
    <Link
      href={`/country/${slug}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        style={{
          background: "white",
          padding: "16px",
          borderRadius: "12px",
          cursor: "pointer",
        }}
      >
        <img
          src={country.flags.png}
          alt={country.flags.alt || country.name.common}
          style={{
            width: "100%",
            height: "120px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
        <h3 style={{ marginTop: "12px" }}>
          {country.name.common}
        </h3>
      </div>
    </Link>
  );
}