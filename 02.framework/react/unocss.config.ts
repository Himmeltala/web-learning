import { Rule, UserShortcuts } from "unocss";

const rules = <Rule<any>[]>[
  [
    /^ofw-(auto|hidden|inherit|initial|overlay|revert|scroll|unset|visible)$/,
    ([, d]) => ({ overflow: `${d}` }),
  ],
  // fon size
  [
    /^size-(\d*\.?\d*)$/,
    ([, d]) => {
      return {
        "font-size": `${d}rem`,
      };
    },
  ],
];

const matches = [
  { prefix: "c", value: "center" },
  { prefix: "s", value: "start" },
  { prefix: "e", value: "end" },
  { prefix: "b", value: "between" },
];

const shortcuts = <UserShortcuts>[
  [
    /^f-((c|s|e)(-(c|s|e|b))*)$/,
    ([, , p1, , p2]) => {
      let style = ``;

      // @ts-ignore
      let val = matches.find((e) => e.prefix === p1);
      style += `flex items-${val!.value} content-${val!.value}`;

      if (p2) {
        // @ts-ignore
        val = matches.find((e) => e.prefix === p2);
        style += ` justify-${val!.value}`;
      }

      return style;
    },
  ],
];

export { rules, shortcuts };
