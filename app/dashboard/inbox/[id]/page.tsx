"client";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};

export default async function EmailDetailPage({ params }: Props) {
  const { id } = params;
  const email = await fetchEmailById(id);

  if (!email) {
    return notFound();
  }

  return (
    <div className="p-6 space-y-6 bg-white rounded-xl shadow-md border">
      <div>
        <Link
          href="/dashboard/inbox"
          className="text-lg text-blue-600 bg-gray-100 rounded-md"
        >
          <ArrowLeft />
        </Link>
      </div>

      <div className="text-gray-800 text-sm border-b pb-4">
        <div className="flex justify-between items-center">
          <span>
            <strong>{email.from}</strong> &lt;{email.email}&gt;
          </span>
          <span>{email.date}</span>
        </div>
      </div>

      <div className="text-gray-800 text-sm border-b pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span>
              {email.from} &lt;{email.email}&gt;
            </span>
          </div>
          <span>{email.date}</span>
        </div>
      </div>

      {/* Asunto */}
      <h1 className="text-2xl font-semibold text-gray-900">{email.subject}</h1>

      {/* Contenido */}
      <div className="border-t pt-4 prose prose-sm max-w-none">
        <div dangerouslySetInnerHTML={{ __html: email.htmlContent }} />
      </div>
    </div>
  );
}

async function fetchEmailById(id: string) {
  return {
    id,
    subject: "Ejemplo de asunto",
    from: "Eric Johnson",
    email: "news@notice.alibaba.com",
    date: "3:45 (hace 11 horas)",
    htmlContent: `
      <p>Hola <strong>Eric</strong>,</p>
      <p>
        Este es el contenido completo del <em>mensaje</em>. Podés revisarlo y 
        <a href="#">responder</a> cuando quieras.
      </p>
      <p>Saludos,<br />El equipo.</p>
    `,
  };
}
