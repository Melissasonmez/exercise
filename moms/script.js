"script";

function beregnBeløbMedMoms(beloeb, moms = 25) {
  const total = beloeb + (beloeb * moms) / 100;
  console.log(`Beløbet inkl. moms (${moms}%): ${total}`);
}

// Eksempler
beregnBeløbMedMoms(100); // moms = 25% default
beregnBeløbMedMoms(200, 10); // moms = 10%
