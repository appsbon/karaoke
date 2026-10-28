/*
    KARAOKE PLAYER SETTINGS
*/

window.KARAOKE_SETTINGS = {

    /*
        CLOUDFLARE R2 SOUNDFONT
    */
    soundFontUrl:
        "https://pub-f2d80d91acad43acb0b396f71e194662.r2.dev/FluidR3_GM.sf2",


    /*
        MIDI SYNTHESIZER LIBRARY
    */
    libraryUrl:
        "https://cdn.jsdelivr.net/npm/spessasynth_lib@4.4.0/+esm",

    workletUrl:
        "https://cdn.jsdelivr.net/npm/spessasynth_lib@4.4.0/dist/spessasynth_processor.min.js",


    /*
        LYRIC TIMING
    */
    introPreviewSeconds: 2.5,
    nextLyricPreviewSeconds: 2.5,
    interludeGapSeconds: 4.0,
    maxAfterLastSyllableSeconds: 2.5,


    /*
        KARAOKE DISPLAY
    */
    backgroundColor: "#101CEF",
    fontFamily: "Arial",
    fontSize: 88,
    leftRightMargin: 200,
    rowPositions: [400, 700],


    /*
        LYRIC COLORS
    */
    activeColor: "#00FF00",
    upcomingColor: "#FFFFFF"

};