module.exports = {
  mode: "jit",
  content: ["./*.html"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      mulish: ["Mulish", "sans-serif"],
    },
    fontSize: {
      14: [".875rem", "1rem"],
      16: ["1rem", "1.5rem"],
      18: ["1.125", "1.69rem"],
      20: ["1.25rem", "1.875rem"],
      22: ["1.375rem", "2.06rem"],
      28: ["1.75rem", "2.25rem"],
      48: ["3rem", "3rem"],
      60: ["3.75rem", "3.75rem"],
      64: ["4rem", "4.375rem"],
      72: ["4.5rem", "7.625rem"],
      80: ["5rem", "5rem"],
      100: ["6.25rem", "6.26rem"],
      120: ["7.5rem", "7.5rem"],
    },
    backgroundColor: {
      white: "#FFFFFF",
      black: "#000000",
      ebony: "#080A12",
      cinder: "#111319",
      mirage: "#191C26",
      watermelon: "#FF5A71",
      dandelion: "#FED65E",
      tune: "#2F323C",
      cadetblue: "#A9AFC3",
      cyanblue: "#212529",
      transparent: "transparent",
      dovegray: "#707070",
    },
    gradientColorStops: (theme) => ({
      white: "#FFFFFF",
      dandelion: "#FED65E",
      mirage: "#191C26",
      ebony: "#080A12",
      watermelon: "#FF5A71",
      cadetblue: "#A9AFC3",
      redG: "#DD4242",
    }),
    textColor: {
      white: "#FFFFFF",
      watermelon: "#FF5A71",
      cadetblue: "#A9AFC3",
      dovegray: "#707070",
    },

    borderColor: (theme) => ({
      white: "#FFFFFF",
      abbey: "#4A4E55",
      watermelon: "#FF5A71",
      dovegray: "#707070",
      cadetblue: "#A9AFC3",
      brightgray: "#3A3F50",
      footer: "#393f4f"
    }),

    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
      18: "18",
    },
    extend: {
      borderRadius: {
        30: "30px",
      },

      spacing: {
        1.25: "20px",
        30: '30px',
        35: "35px",
        40: '40px',
        45: "45px",
        50: "50px",
        60: "60px",
        70: "70px",
        90: "90px",
        100: "100px",
        125: "125px",
        150: "150px",
        164: "164px",
        186: "186px",
        210: "210px",
        255: "255px",
        300: "300px",
        310: "310px",
        458: '458px'
      },
      width: {
        8: "8px",
        20: "20px",
        24: "24px",
        46: "46px",
        80: "80px",
        100: "100px",
        164: "164px",
        220: "220px",
        275: "275px",
        300: "300px",
        380: "380px",
        550: "550px",
      },
      height: {
        8: "8px",
        20: "20px",
        24: "24px",
        48: "48px",
        80: "80px",
        100: "100px",
        200: "200px",
        300: "300px",
        490: "490px",
      },
      lineHeight: {
        48: "48px",
      },
      outline: {
        black: ["2px solid #000000", "1px"],
      },
      colors: {
        mirage: "#191C26",
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
