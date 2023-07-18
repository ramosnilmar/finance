"use client";
import { ReactNode } from "react";
import S from "./style.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

type CardProps = {
  children: ReactNode;
  title?: string;
  action?: {
    title: string;
    link: string;
  };
};

export default function Card({ children, title, action }: CardProps) {
  return (
    <div className="flex flex-col mt-12 w-full">
      <div className={S.cardHeader}>{title}</div>
      <div className={S.card}>
        <div className="">{children}</div>
        {action && (
          <div className=" flex justify-center w-full border-t">
            <div className={S.cardAction}>
              <Link href={action.link ?? ""}>{action?.title}</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
