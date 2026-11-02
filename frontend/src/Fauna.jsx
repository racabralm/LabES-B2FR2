// Ilustrações simples da fauna brasileira, nas cores reais de cada animal.
// São decorativas (aria-hidden), por isso não atrapalham leitores de tela.

export function Tucano({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 120 120" aria-hidden="true">
      <rect x="6" y="98" width="108" height="7" rx="3.5" fill="#8B5A2B" />
      <path d="M34 92 L26 118 L40 118 L44 94 Z" fill="#1B1B1B" />
      <ellipse cx="44" cy="70" rx="20" ry="28" fill="#1B1B1B" />
      <ellipse cx="50" cy="95" rx="7" ry="3" fill="#D7263D" />
      <circle cx="51" cy="40" r="14" fill="#1B1B1B" />
      <ellipse cx="57" cy="57" rx="11" ry="13" fill="#FFFFFF" />
      <ellipse cx="56" cy="67" rx="8" ry="3.5" fill="#FFE9A6" />
      <circle cx="56" cy="38" r="6" fill="#FF9F1C" />
      <circle cx="56" cy="38" r="3.4" fill="#2D7FF9" />
      <circle cx="56" cy="38" r="1.8" fill="#1B1B1B" />
      <path d="M62 31 Q94 22 111 41 Q97 51 62 50 Z" fill="#FF8C1A" />
      <path d="M62 31 Q94 22 111 41 Q90 34 64 38 Z" fill="#FFB347" />
      <path d="M101 35 Q108 37 111 41 Q107 45 101 47 Z" fill="#1B1B1B" />
      <path d="M63 43 Q85 42 104 41" stroke="#C85A00" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <rect x="40" y="95" width="4" height="6" rx="2" fill="#5B6B8C" />
      <rect x="50" y="95" width="4" height="6" rx="2" fill="#5B6B8C" />
    </svg>
  );
}

export function Arara({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 120 120" aria-hidden="true">
      <path d="M66 84 Q76 104 90 120 L100 116 Q86 100 76 82 Z" fill="#D62828" />
      <path d="M86 108 Q92 115 96 120 L102 117 Q97 111 92 105 Z" fill="#1D4E89" />
      <rect x="6" y="88" width="108" height="7" rx="3.5" fill="#8B5A2B" />
      <ellipse cx="62" cy="62" rx="18" ry="26" fill="#E63946" />
      <path d="M68 44 Q86 52 84 74 Q80 88 70 92 Q64 70 68 44 Z" fill="#FFC300" />
      <path d="M72 58 Q85 64 83 76 Q79 88 70 92 Q66 76 72 58 Z" fill="#2A9D8F" />
      <path d="M74 70 Q84 74 82 82 Q78 90 70 92 Q69 82 74 70 Z" fill="#1D6FD8" />
      <circle cx="55" cy="36" r="14" fill="#E63946" />
      <ellipse cx="49" cy="38" rx="8" ry="9" fill="#FFFFFF" />
      <circle cx="50" cy="35" r="2.6" fill="#FFE08A" />
      <circle cx="50" cy="35" r="1.4" fill="#1B1B1B" />
      <path d="M43 32 Q29 32 30 48 Q36 42 43 45 Z" fill="#F1E3C8" />
      <path d="M43 45 Q37 46 35 51 Q42 54 46 49 Z" fill="#2B2B2B" />
      <rect x="54" y="85" width="4" height="7" rx="2" fill="#6C6C6C" />
      <rect x="63" y="85" width="4" height="7" rx="2" fill="#6C6C6C" />
    </svg>
  );
}

export function Capivara({ className = "" }) {
  return (
    <svg className={className} viewBox="-2 0 124 120" aria-hidden="true">
      <ellipse cx="60" cy="104" rx="52" ry="7" fill="#C5E1A5" />
      <ellipse cx="54" cy="78" rx="38" ry="24" fill="#A0703F" />
      <path d="M22 70 Q40 52 72 56 Q50 60 30 78 Z" fill="#8A5A2E" />
      <rect x="28" y="92" width="10" height="14" rx="5" fill="#8A5A2E" />
      <rect x="66" y="92" width="10" height="14" rx="5" fill="#8A5A2E" />
      <circle cx="80" cy="48" r="5" fill="#7A4E28" />
      <circle cx="80" cy="48" r="2.2" fill="#5A3A1E" />
      <path d="M72 58 Q76 46 90 46 L104 47 Q114 48 114 59 L114 66 Q114 77 103 78 L88 79 Q76 79 72 70 Z" fill="#A0703F" />
      <path d="M106 48 Q114 50 114 59 L114 63 Q108 60 106 48 Z" fill="#6B4423" />
      <circle cx="90" cy="58" r="2.3" fill="#1B1B1B" />
      <ellipse cx="111" cy="56" rx="1.4" ry="2.2" fill="#3B2412" />
      <path d="M104 71 Q108 73 112 71" stroke="#6B4423" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <ellipse cx="92" cy="40" rx="8" ry="6" fill="#FFD23F" />
      <path d="M88 38 Q94 32 100 38 Q94 40 88 38 Z" fill="#7A5230" />
      <circle cx="98" cy="35" r="5" fill="#FFD23F" />
      <path d="M95 32 Q98 29 102 32 Q98 33 95 32 Z" fill="#1B1B1B" />
      <circle cx="99.5" cy="35" r="1.1" fill="#1B1B1B" />
      <path d="M102 36 L106 37 L102 38 Z" fill="#2B2B2B" />
      <path d="M84 40 L78 38 L82 42 Z" fill="#7A5230" />
    </svg>
  );
}

export function Onca({ className = "" }) {
  const rosetas = [
    [26, 72], [40, 63], [55, 68], [70, 62], [36, 82], [50, 82], [64, 78], [80, 72],
  ];

  return (
    <svg className={className} viewBox="-6 0 166 110" aria-hidden="true">
      <path d="M16 82 Q0 74 4 58" stroke="#F0A73A" strokeWidth="8" fill="none" strokeLinecap="round" />
      <path d="M4 60 Q3 55 6 51" stroke="#2B1A0E" strokeWidth="8" fill="none" strokeLinecap="round" />
      <ellipse cx="54" cy="76" rx="44" ry="20" fill="#F0A73A" />
      <ellipse cx="58" cy="89" rx="32" ry="6" fill="#FBE3B3" />
      {rosetas.map(([x, y]) => (
        <circle
          key={`${x}-${y}`}
          cx={x}
          cy={y}
          r="4.5"
          fill="#E08E22"
          stroke="#3B2A1A"
          strokeWidth="1.8"
          strokeDasharray="5 2.6"
        />
      ))}
      <rect x="92" y="88" width="22" height="9" rx="4.5" fill="#F0A73A" />
      <rect x="112" y="90" width="22" height="9" rx="4.5" fill="#F0A73A" />
      <circle cx="116" cy="60" r="20" fill="#F0A73A" />
      <circle cx="101" cy="44" r="6" fill="#F0A73A" />
      <circle cx="101" cy="44.5" r="2.6" fill="#C77B2A" />
      <circle cx="131" cy="44" r="6" fill="#F0A73A" />
      <circle cx="131" cy="44.5" r="2.6" fill="#C77B2A" />
      <ellipse cx="116" cy="70" rx="11" ry="8" fill="#FBE3B3" />
      <path d="M112 64 Q116 61 120 64 Q116 68 112 64 Z" fill="#B5655A" />
      <path d="M116 67 L116 71 M111 72 Q116 75 121 72" stroke="#3B2A1A" strokeWidth="1.3" fill="none" strokeLinecap="round" />
      <ellipse cx="108" cy="56" rx="2.4" ry="3" fill="#8DA62B" />
      <ellipse cx="124" cy="56" rx="2.4" ry="3" fill="#8DA62B" />
      <circle cx="108" cy="56.5" r="1.2" fill="#1B1B1B" />
      <circle cx="124" cy="56.5" r="1.2" fill="#1B1B1B" />
      <circle cx="102" cy="64" r="1.4" fill="#3B2A1A" />
      <circle cx="130" cy="64" r="1.4" fill="#3B2A1A" />
      <circle cx="112" cy="47" r="1.5" fill="#3B2A1A" />
      <circle cx="120" cy="47" r="1.5" fill="#3B2A1A" />
      <circle cx="116" cy="44" r="1.5" fill="#3B2A1A" />
    </svg>
  );
}

export function Preguica({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 120 130" aria-hidden="true">
      <rect x="0" y="8" width="120" height="8" rx="4" fill="#8B5A2B" />
      <ellipse cx="14" cy="8" rx="9" ry="4.5" transform="rotate(-20 14 8)" fill="#4CAF50" />
      <ellipse cx="102" cy="7" rx="9" ry="4.5" transform="rotate(25 102 7)" fill="#43A047" />
      <ellipse cx="112" cy="18" rx="7" ry="3.5" transform="rotate(50 112 18)" fill="#66BB6A" />
      <path d="M44 66 Q38 40 42 14" stroke="#8D7B68" strokeWidth="11" fill="none" strokeLinecap="round" />
      <path d="M76 66 Q82 40 78 14" stroke="#8D7B68" strokeWidth="11" fill="none" strokeLinecap="round" />
      <path d="M37 13 Q40 4 46 11 M41 12 Q44 4 49 12" stroke="#3E3328" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M73 12 Q76 4 81 12 M77 11 Q80 4 85 13" stroke="#3E3328" strokeWidth="2" fill="none" strokeLinecap="round" />
      <ellipse cx="60" cy="88" rx="22" ry="27" fill="#8D7B68" />
      <ellipse cx="60" cy="94" rx="13" ry="17" fill="#A8977F" />
      <path d="M48 110 Q44 122 50 124 Q55 120 54 112 Z" fill="#7A6855" />
      <path d="M72 110 Q76 122 70 124 Q65 120 66 112 Z" fill="#7A6855" />
      <circle cx="60" cy="58" r="19" fill="#8D7B68" />
      <ellipse cx="60" cy="61" rx="15" ry="12" fill="#EBDDC8" />
      <path d="M44 57 Q50 54 56 59 Q51 64 45 62 Z" fill="#4A3B2C" />
      <path d="M76 57 Q70 54 64 59 Q69 64 75 62 Z" fill="#4A3B2C" />
      <circle cx="52" cy="59" r="1.8" fill="#111111" />
      <circle cx="68" cy="59" r="1.8" fill="#111111" />
      <ellipse cx="60" cy="64" rx="3.2" ry="2.2" fill="#3E3328" />
      <path d="M55 68 Q60 72 65 68" stroke="#3E3328" strokeWidth="1.6" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function Tatu({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 120 90" aria-hidden="true">
      <ellipse cx="60" cy="82" rx="50" ry="5" fill="#C5E1A5" />
      <path d="M22 70 Q6 72 4 62" stroke="#A88B68" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M20 74 Q20 30 58 26 Q96 30 96 74 Z" fill="#B89A7A" />
      <path d="M44 30 Q40 52 42 74 M56 26 Q54 50 56 74 M68 27 Q70 50 70 74 M80 32 Q84 52 84 74" stroke="#8C7356" strokeWidth="3" fill="none" />
      <path d="M20 74 Q20 30 58 26 Q96 30 96 74" stroke="#8C7356" strokeWidth="2" fill="none" />
      <circle cx="30" cy="56" r="2" fill="#D4BC9C" />
      <circle cx="34" cy="44" r="2" fill="#D4BC9C" />
      <circle cx="90" cy="56" r="2" fill="#D4BC9C" />
      <path d="M92 56 Q112 52 116 66 Q112 74 100 72 Q94 70 92 64 Z" fill="#C9AD8A" />
      <path d="M96 52 L98 40 L104 52 Z" fill="#A88B68" />
      <circle cx="104" cy="60" r="2" fill="#1B1B1B" />
      <circle cx="116" cy="66" r="1.6" fill="#5A4632" />
      <rect x="30" y="70" width="9" height="12" rx="4" fill="#A88B68" />
      <rect x="78" y="70" width="9" height="12" rx="4" fill="#A88B68" />
    </svg>
  );
}

export function LoboGuara({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 150 120" aria-hidden="true">
      <path d="M36 60 Q14 70 14 92 Q20 96 26 90 Q26 74 42 66 Z" fill="#C8551F" />
      <path d="M14 92 Q16 100 24 98 Q27 94 26 90 Q20 96 14 92 Z" fill="#FFFFFF" />
      <rect x="40" y="62" width="7" height="48" rx="3.5" fill="#1B1B1B" />
      <rect x="50" y="64" width="7" height="46" rx="3.5" fill="#2B2B2B" />
      <rect x="86" y="62" width="7" height="48" rx="3.5" fill="#1B1B1B" />
      <rect x="96" y="64" width="7" height="46" rx="3.5" fill="#2B2B2B" />
      <ellipse cx="70" cy="58" rx="34" ry="15" fill="#D9622B" />
      <path d="M92 52 Q104 36 112 30 L120 40 Q110 50 104 66 Z" fill="#D9622B" />
      <path d="M60 44 Q80 40 96 48 Q106 38 112 30 L116 34 Q108 46 100 56 Q80 48 60 48 Z" fill="#1B1B1B" />
      <ellipse cx="118" cy="34" rx="12" ry="9" fill="#D9622B" />
      <path d="M124 32 L142 38 Q142 42 138 43 L124 42 Z" fill="#D9622B" />
      <circle cx="141" cy="39.5" r="2.6" fill="#1B1B1B" />
      <path d="M126 41 L138 43" stroke="#1B1B1B" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M106 28 L104 6 L116 24 Z" fill="#D9622B" />
      <path d="M107 24 L106 11 L113 22 Z" fill="#3B2A1A" />
      <path d="M116 26 L120 4 L126 26 Z" fill="#D9622B" />
      <path d="M118 23 L120 10 L123 24 Z" fill="#3B2A1A" />
      <circle cx="122" cy="32" r="2" fill="#1B1B1B" />
      <path d="M112 42 Q118 48 126 44 Q120 52 110 48 Z" fill="#FFFFFF" />
    </svg>
  );
}

export function Tamandua({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 170 120" aria-hidden="true">
      <path d="M52 58 Q26 50 12 62 Q2 76 6 100 L12 94 L16 104 L22 96 L28 104 L32 94 L40 98 Q44 84 52 80 Z" fill="#6E665C" />
      <path d="M16 70 Q14 84 18 96 M26 66 Q24 80 28 94 M36 64 Q34 76 38 90" stroke="#5A534A" strokeWidth="2" fill="none" strokeLinecap="round" />
      <rect x="54" y="78" width="10" height="30" rx="5" fill="#3E3933" />
      <rect x="100" y="78" width="11" height="30" rx="5" fill="#E8E2D6" />
      <rect x="100" y="90" width="11" height="6" fill="#1F1F1F" />
      <ellipse cx="82" cy="66" rx="36" ry="20" fill="#8E8579" />
      <path d="M68 47 Q84 44 102 58 L112 86 L100 88 L94 66 Q82 54 64 54 Z" fill="#EDE8DF" />
      <path d="M70 50 Q84 48 98 60 L106 86 L100 87 L92 66 Q80 56 66 54 Z" fill="#1F1F1F" />
      <path d="M108 54 Q122 54 160 82 Q162 86 158 87 Q126 76 110 74 Z" fill="#B7AFA2" />
      <circle cx="117" cy="61" r="1.8" fill="#1B1B1B" />
      <ellipse cx="111" cy="54" rx="3.5" ry="2.5" fill="#8E8579" />
      <rect x="72" y="80" width="10" height="28" rx="5" fill="#3E3933" />
      <rect x="114" y="80" width="10" height="28" rx="5" fill="#E8E2D6" />
      <rect x="114" y="92" width="10" height="6" fill="#1F1F1F" />
    </svg>
  );
}

export function Jabuti({ className = "" }) {
  const placas = [
    [44, 52], [60, 46], [76, 52], [52, 64], [68, 64],
  ];

  return (
    <svg className={className} viewBox="0 0 120 90" aria-hidden="true">
      <ellipse cx="60" cy="82" rx="48" ry="5" fill="#C5E1A5" />
      <path d="M90 66 Q104 56 114 62 Q116 70 104 72 Q96 72 90 70 Z" fill="#3B2F25" />
      <circle cx="104" cy="62" r="3" fill="#E4572E" />
      <circle cx="110" cy="66" r="2.4" fill="#F4A259" />
      <circle cx="108" cy="61" r="1.4" fill="#111111" />
      <path d="M18 70 L10 72 L18 74 Z" fill="#3B2F25" />
      <rect x="26" y="66" width="12" height="14" rx="5" fill="#3B2F25" />
      <rect x="78" y="66" width="12" height="14" rx="5" fill="#3B2F25" />
      <circle cx="30" cy="72" r="2" fill="#E4572E" />
      <circle cx="84" cy="72" r="2" fill="#E4572E" />
      <path d="M18 70 Q20 34 60 32 Q100 34 102 70 Z" fill="#2E241C" />
      <path d="M18 70 L102 70" stroke="#6B5434" strokeWidth="4" strokeLinecap="round" />
      {placas.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="6" fill="#C9A227" stroke="#6B5434" strokeWidth="2" />
      ))}
    </svg>
  );
}

export function AraraAzul({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 120 120" aria-hidden="true">
      <path d="M66 84 Q76 104 90 120 L100 116 Q86 100 76 82 Z" fill="#1A3E9C" />
      <rect x="6" y="88" width="108" height="7" rx="3.5" fill="#8B5A2B" />
      <ellipse cx="62" cy="62" rx="18" ry="26" fill="#2457C5" />
      <path d="M68 44 Q86 52 84 74 Q80 88 70 92 Q64 70 68 44 Z" fill="#1A3E9C" />
      <path d="M72 54 Q82 60 80 74" stroke="#3A6FE0" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="55" cy="36" r="14" fill="#2457C5" />
      <circle cx="50" cy="34" r="4" fill="#FFD23F" />
      <circle cx="50" cy="34" r="1.8" fill="#1B1B1B" />
      <path d="M43 30 Q29 30 30 48 Q36 42 43 45 Z" fill="#2B2B2B" />
      <path d="M43 45 Q37 46 35 51 Q42 54 46 49 Z" fill="#1B1B1B" />
      <path d="M42 46 Q45 50 49 47" stroke="#FFD23F" strokeWidth="3" fill="none" strokeLinecap="round" />
      <rect x="54" y="85" width="4" height="7" rx="2" fill="#4A4A4A" />
      <rect x="63" y="85" width="4" height="7" rx="2" fill="#4A4A4A" />
    </svg>
  );
}

export function Borboleta({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 60 50" aria-hidden="true">
      <path d="M29 24 Q14 0 4 8 Q-2 18 12 26 Q20 28 29 26 Z" fill="#1E88E5" stroke="#0D2B5C" strokeWidth="2.5" />
      <path d="M31 24 Q46 0 56 8 Q62 18 48 26 Q40 28 31 26 Z" fill="#1E88E5" stroke="#0D2B5C" strokeWidth="2.5" />
      <path d="M29 27 Q16 30 12 40 Q18 46 28 34 Z" fill="#42A5F5" stroke="#0D2B5C" strokeWidth="2.5" />
      <path d="M31 27 Q44 30 48 40 Q42 46 32 34 Z" fill="#42A5F5" stroke="#0D2B5C" strokeWidth="2.5" />
      <circle cx="8" cy="12" r="1.4" fill="#FFFFFF" />
      <circle cx="52" cy="12" r="1.4" fill="#FFFFFF" />
      <ellipse cx="30" cy="27" rx="2" ry="10" fill="#1B1B1B" />
      <path d="M29 18 Q26 10 22 8 M31 18 Q34 10 38 8" stroke="#1B1B1B" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function Sagui({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 80 112" aria-hidden="true">
      <path d="M44 74 Q50 92 62 98 Q72 104 66 110" stroke="#B8A898" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M44 74 Q50 92 62 98 Q72 104 66 110" stroke="#4A3F36" strokeWidth="6" fill="none" strokeDasharray="4 4" />
      <path d="M31 46 Q26 26 28 7" stroke="#7A6A5B" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M49 46 Q54 26 52 7" stroke="#7A6A5B" strokeWidth="6" fill="none" strokeLinecap="round" />
      <circle cx="28" cy="6" r="4" fill="#2B211A" />
      <circle cx="52" cy="6" r="4" fill="#2B211A" />
      <ellipse cx="40" cy="62" rx="13" ry="17" fill="#8C7B6B" />
      <ellipse cx="40" cy="66" rx="8" ry="11" fill="#A89886" />
      <path d="M34 76 Q31 84 33 90" stroke="#7A6A5B" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M46 76 Q49 84 47 90" stroke="#7A6A5B" strokeWidth="5" fill="none" strokeLinecap="round" />
      <ellipse cx="25" cy="35" rx="9" ry="7" transform="rotate(-20 25 35)" fill="#F5F3EE" stroke="#CFC6B6" strokeWidth="1.5" />
      <ellipse cx="55" cy="35" rx="9" ry="7" transform="rotate(20 55 35)" fill="#F5F3EE" stroke="#CFC6B6" strokeWidth="1.5" />
      <circle cx="40" cy="38" r="12" fill="#3A2E26" />
      <ellipse cx="40" cy="41" rx="7.5" ry="7" fill="#C9B49A" />
      <ellipse cx="40" cy="29" rx="3.2" ry="2" fill="#FFFFFF" />
      <circle cx="36.5" cy="39" r="1.8" fill="#1B1B1B" />
      <circle cx="43.5" cy="39" r="1.8" fill="#1B1B1B" />
      <ellipse cx="40" cy="43.5" rx="1.6" ry="1.1" fill="#3A2E26" />
      <path d="M37.5 46 Q40 47.5 42.5 46" stroke="#3A2E26" strokeWidth="1" fill="none" strokeLinecap="round" />
    </svg>
  );
}
