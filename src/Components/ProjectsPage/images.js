const images = {
  bathrooms: Array.from({ length: 9 }, (_, index) => ({
    src: `/pete/images/bathroom/${index}.JPG`,
    fill: true,
  })),
  garages: Array.from({ length: 11 }, (_, index) => ({
    src: `/pete/images/garage/${index}.JPG`,
    fill: true,
  })),
  kitchens: Array.from({ length: 10 }, (_, index) => ({
    src: `/pete/images/kitchen/${index}.JPG`,
    fill: true,
  })),
  finished_basements: Array.from({ length: 5 }, (_, index) => ({
    src: `/pete/images/basement/${index}.JPG`,
    fill: true,
  })),
  additions: Array.from({ length: 5 }, (_, index) => ({
    src: `/pete/images/addition/${index}.JPG`,
    fill: true,
  })),
  windows_and_siding: Array.from({ length: 2 }, (_, index) => ({
    src: `/pete/images/windows/${index}.JPG`,
    fill: true,
  })),
};

export default images;
