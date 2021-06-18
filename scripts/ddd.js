
const ddd = extend(Planet, "ddd", Planets.sun, 3, 1, {
    generator: new SerpuloPlanetGenerator(),
    bloom: true,
    radius: 1,
    accessible: true,
    hasAtmosphere: true,
    atmosphereColor: Color.valueOf("094985"),
    atmosphereRadIn: 0.02,
    atmosphereRadOut: 0.3,
    localizedName: "ddd"
});
omicron.meshLoader = () => extend(HexMesh, ddd, 6, {});
