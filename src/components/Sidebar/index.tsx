"use client";

import {
  ChartBarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import {
  CreditCardIcon,
  HomeIcon,
  BuildingLibraryIcon,
  ChartPieIcon,
  Cog8ToothIcon,
  ListBulletIcon,
} from "@heroicons/react/24/outline";

import S from "./style.module.css";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div
      data-active={isOpen}
      className="relative h-screen data-[active=true]:w-[92px] w-[230px] bg-white text-gray-600 py-8 px-7 transition-all duration-300 ease-in-out"
      onClick={toggle}
    >
      <div className="overflow-hidden flex flex-col gap-12">
        <div className={S.chevron}>
          {!isOpen ? (
            <ChevronLeftIcon className="h-4 w-4" />
          ) : (
            <ChevronRightIcon className="h-4 w-4" />
          )}
        </div>
        <ChartBarIcon className="h-10 w-10 text-sky-600" />

        <div className={S.iconWrapper}>
          <HomeIcon className="h-7 w-7" />
          <p>Dashboard</p>
        </div>
        <div className={S.iconWrapper}>
          <BuildingLibraryIcon className="h-7 w-7" />
          <p>Conta Bancaria</p>
        </div>
        <div className={S.iconWrapper}>
          <ListBulletIcon className="h-7 w-7" />
          <p>Transações</p>
        </div>
        <div className={S.iconWrapper}>
          <CreditCardIcon className="h-7 w-7" />
          <p>Cartões de crédito</p>
        </div>
        <div className={S.iconWrapper}>
          <ChartPieIcon className="h-7 w-7" />
          <p>Relatórios</p>
        </div>
        <div className={S.iconWrapper}>
          <Cog8ToothIcon className="h-7 w-7" />
          <p>Configurações</p>
        </div>
      </div>
    </div>
  );
}
