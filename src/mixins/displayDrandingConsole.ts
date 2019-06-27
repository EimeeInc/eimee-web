// prettier-ignore
const logo = `%c
        %cJJKKKKJJ%c
    %cJJLLGGGGGGGGLLJJ%c
  %cJJLLGGGGGGGGGGGGCCJJ%c${     ""}       iiiiiiiiiii    ,,,,     .,  .,,..  ,,,,        ....          ,,..
  %cKKGGGGGGGGGGGGGGGGKK%c${     ""}       i11""""""""    ..,,    11,,..ii11,,ii11,    .ii11ii11..   .11iiii11..
  %cLLGGGGGGGGGGGG%cCCCC%cLL%c${ ""}       i11,,,,,,,       ..    11i    i11    ii1   ,1ii   ,11i"  ,1ii   ,11i"
  %cLLGGGGGGGGGGCC%cLLLL%cLL%c${ ""}       i11iiiiiii     iiii    11i    i11    ii1   iiii11ii""    11ii11ii""
  %cKKGGGG%cCC%cCC%cCC%cLL%cLLLLJJ%c       i11            iiii    11i    i11    ii1   ii11..  ,,..  ii11..  ,,..
  %cJJCCGG%cLL%cLLLLLLLLLLII%c${ ""}       i1111111111    iiii    11i    i11    ii1     ii1111ii.     ii1111ii.
    %cJJCC%cCC%cLLLLLLLLII%c
      %cJJ%cKK%cKKKKJJII%c
`;

const primaryColor = "color: rgb(255, 215, 95)";
const secondaryColor = "color: rgb(215, 135, 95)";

const primaryBorderColor = "color: rgb(215, 175, 95)";
const secondaryBorderColor = "color: rgb(255, 175, 95)";

const styles = [
  "",
  primaryColor,
  "",
  primaryColor,
  "",
  primaryColor,
  "",
  primaryColor,
  "",
  primaryColor,
  secondaryBorderColor,
  primaryColor,
  "",
  primaryColor,
  secondaryColor,
  secondaryBorderColor,
  "",
  primaryColor,
  secondaryBorderColor,
  primaryColor,
  secondaryBorderColor,
  primaryBorderColor,
  secondaryColor,
  "",
  primaryColor,
  primaryBorderColor,
  secondaryColor,
  "",
  primaryColor,
  primaryBorderColor,
  secondaryColor,
  "",
  primaryColor,
  secondaryBorderColor,
  secondaryColor,
  "",
];

export default () => {
  console.info(logo, ...styles);

  console.info(
    "ソースコード公開中！",
    "https://github.com/EimeeInc/eimee-web/",
    "Issue, Pull Request 大歓迎です！",
  );
};
