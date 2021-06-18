
const ddd = extend(Planet, "ddd", Planets.serpulo, 3, 1, {
    generator: new SerpuloPlanetGenerator(),
    bloom: true,
    radius: 1,
    accessible: true,
    hasAtmosphere: true,
    atmosphereColor: Color.valueOf("094985"),
    atmosphereRadIn: 0.02,
    atmosphereRadOut: 3,
    localizedName: "ddd"
});
ddd.meshLoader = () => extend(HexMesh, ddd, 6, {});
