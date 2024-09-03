import { footerProps } from "@lib/types";

export default function Footer(prop:{year:string, fullName:string, studentId:string}) {
  return (
    <div className="mt-3">
      <hr />
      <p className="text-secondary text-center">Copyright © {prop.year} {prop.fullName} {prop.studentId}</p>
    </div>
  );
}