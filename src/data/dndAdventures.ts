import type { DndAdventure } from '@/types/dndAdventure'
const images = import.meta.glob('@/assets/images/dnd-adventures/*.png', {
  eager: true,
  import: 'default',
}) as Record<string, string>

function getImage(name: string): string {
  const path = `/src/assets/images/dnd-adventures/${name}.png`
  const image = images[path] ?? images[`/src/assets/images/dnd-adventures/default.png`]!

  return image
}

export const dndAdventures: DndAdventure[] = [
  {
    title: 'Nouvelle aventure',
    notionUrl:
      'https://nosy-seeder-540.notion.site/Nouvelle-aventure-33d48197325e8110a714fded86777eb6',
    description: `Résumé de l'aventure`,
    image: getImage(''),
  },
  {
    title: 'Lithopédion',
    notionUrl: 'https://nosy-seeder-540.notion.site/Lithop-dion-33d48197325e81349853f3229d45b215',
    description: `Un ancien assassin est retrouvé pétrifié dans sa demeure. Sa femme a disparue, emportant avec elle leur enfant à naître. Partout dans la campagne environnante, des cas de pétrification sont recensés.\nLa femme disparue, transformée en Méduse, s'est réfugiée dans une ruine ancienne, afin d'exercer sa vengeance, noyant sa haine et sa douleur en changeant en pierre toutes les femmes enceintes.`,
    image: getImage(''),
  },
  {
    title: 'Le Geyser des mariés',
    notionUrl:
      'https://nosy-seeder-540.notion.site/Le-Geyser-des-mari-s-33d48197325e8153ba7cf4371096b5c0',
    description: `Lors d'une cérémonie de mariage, une femme offre au geyser des mariés un symbole protecteur étrange.\nEn enquêtant, le groupe découvre le sombre secret de la mariée : elle dirige un groupe de bandits, et son rapprochement avec le marchand de potion n'a pour unique but que de subtiliser ses ingrédients pour faire exploser le geyser et récupérer les richesses qui y ont été déposées par des générations de mariés.`,
    image: getImage(''),
  },
  {
    title: 'La loi du plus fort',
    notionUrl:
      'https://nosy-seeder-540.notion.site/La-loi-du-plus-fort-33d48197325e81bf811dfd3d9b53c6f6',
    description: `Les cierges d'invocation représentent l'économie centrale d'une ville. Lorsque des bandits s'emparent du lieu où elle est produite, la ville est prête à tout pour les en déloger.\nMais, arrivés sur les lieux, le groupe découvre qu'un ennemi bien plus redoutable s'est emparé des lieux, piétinant les bandits : un hibours.`,
    image: getImage(''),
  },
  {
    title: 'Le roi bleu',
    notionUrl: 'https://nosy-seeder-540.notion.site/Le-roi-bleu-33d48197325e81c78e4efa9f3a7e693a',
    description: `Libérés de leurs geôliers, les tristement célèbres prisonniers de la prison bleue menacent les dirigeants locaux au cours d'un défilé.\nAfin de supprimer la menace, l'armée est envoyée sur place, épaulée par les aventuriers.\nMais la prison se referme sur eux, les enfermant avec les pires criminels, tandis que le roi bleu s'en extirpe et mène ses troupes de revenants à l'assaut de la ville sans défense.`,
    image: getImage(''),
  },
  {
    title: 'Faux sangblants',
    notionUrl:
      'https://nosy-seeder-540.notion.site/Faux-sangblants-33d48197325e81cbb774f9b0a72b2e1b',
    description: `La fontaine du marché déverse un flot de sang. Les dirigeants ne s'inquiètent guère du problème, mais un groupe local est bien décidé à le résoudre.\nSeulement, rien ne prépare le groupe à ce qu'ils trouvent : le cadavre de ces mêmes dirigeants rencontrés un peu plus tôt.\nPour dévoiler la véritable nature des imposteurs, ils devront faire appel à l'un des êtres les plus pur qui existe : le rarissime couatl`,
    image: getImage(''),
  },
  {
    title: "Le cor de l'Apocalypse",
    notionUrl:
      'https://nosy-seeder-540.notion.site/Le-cor-de-l-Apocalypse-33d48197325e81c1b4b6c4e7bebdda18',
    description: `Plusieurs villes sont retrouvées réduites à néant, une force destructrice semblant avoir piétiné jusqu'à leurs fondations.\nLes survivants parlent d'un cor résonnant peu avant l'anéantissement.\nGuidé par la haine, un dresseur de créatures cherche à anéantir tous ceux participant au trafic d'animaux, cherchant vengeance pour le dragon féérique qui lui fut enlevé par des braconniers.`,
    image: getImage(''),
  },
  {
    title: "Le jardin d'Eden",
    notionUrl:
      'https://nosy-seeder-540.notion.site/Le-jardin-d-Eden-33d48197325e81258c30f3eafdbf7931',
    description: `Une auberge tire ses boissons luxueuses d'un sylvanien vivant dans une zone extra-planaire. Lorsque les livraisons cessent, d'étranges phénomènes commencent à se produire.\nDerrière le portail menant au plan, la corruption gangrène le splendide verger. Une guenaude verte, se faisant passer pour une dryade, corrompt les lieux et cherche à en éliminer le sylvanien, avec l'aide monstrueuse d'un rouilleux de Gulthias.`,
    image: getImage(''),
  },
  {
    title: 'Le démon de la lune',
    notionUrl:
      'https://nosy-seeder-540.notion.site/Le-d-mon-de-la-lune-33d48197325e8133b979c7d2a4f4536e',
    description: `Un magicien souhaite expérimenter un nouvel enchantement, nécessitant une lune parfaite visible depuis une ruine située sur un pic montagneux.\nLoin d'être inoccupée, la ruine est cependant sécurisée par un groupe de chasseurs de monstres attendant le maitre des lieux.\nMais l'enchantement provoque l'apparition de démons tentant de reprendre possession des lieux pour leur ignoble maître, le barlgura.`,
    image: getImage(''),
  },
  {
    title: "L'œil de l'escroc",
    notionUrl:
      'https://nosy-seeder-540.notion.site/L-il-de-l-escroc-33d48197325e81a38efadb38bae09817',
    description: `Au cœur d'un phare mouvant, de nombreuses preuves compromettantes poussent les marchand locaux à se plier aux extorsions d'un groupe de bandits terrorisant la ville.\nS'infiltrant au sein du phare, le groupe découvrira la véritable puissance du maître des lieux, contrôlant un spectateur et des armures animées pour impressionner ses hommes, profitant des fruits de ses pillages pour vivre dans un luxe total.`,
    image: getImage(''),
  },
  {
    title: 'Le sang des âmes sœurs',
    notionUrl:
      'https://nosy-seeder-540.notion.site/Le-sang-des-mes-s-urs-33d48197325e81b4957ed6382d47d489',
    description: `Un couple de vampire malfaisants se terre dans une crypte.\nPlusieurs groupes d'aventuriers s'y rendent, mais la menace vampirique est grande. Soumettant le groupe par le poison, ils imposent leur désir à celui-ci, n'ayant d'autre choix que d'obéir pour obtenir le remède.\nLeur but : récupérer la relique d'un des vampires, cachées sous le temple de la déité les traquant.`,
    image: getImage(''),
  },
  {
    title: "La mémoire de l'eau",
    notionUrl:
      'https://nosy-seeder-540.notion.site/La-m-moire-de-l-eau-33d48197325e813d9746e00ec1569424',
    description: `Kidnappés par des kuo-toas, des voyageurs se retrouvent en mauvaise posture. Pour les sauver, il faut parvenir jusqu'au repaire des monstres, situé profondément sous l'eau.\nDans ce réseau de grottes tentaculaires, les kuo-toas vouent un culte à une divinité malveillante, sacrifiant des malheureux en son nom. Mais la divinité, loin d'être une simple invention des monstres, se révèle leur maître à tous : un aboleth.`,
    image: getImage(''),
  },
  {
    title: 'Qui sème le vent…',
    notionUrl:
      'https://nosy-seeder-540.notion.site/Qui-s-me-le-vent-33d48197325e81aea2a0f3bd975da1e3',
    description: `Malmenés par les tempêtes et un esclavagiste impitoyable, une communauté de pêcheurs souhaite se débarrasser de ces deux fléaux.\nLa tempête nait d'un rassemblement d'élémentaires de l'air, attirés par une relique. Emporter la relique dans un phare abandonné pourrait faire s'effondrer ce dernier sur la maison de l'esclavagiste en contrebas, tout en supprimant la source des tempêtes.`,
    image: getImage(''),
  },
  {
    title: 'Spores des profondeurs',
    notionUrl:
      'https://nosy-seeder-540.notion.site/Spores-des-profondeurs-33d48197325e81fba00bc398ea493aa4',
    description: `L'apprenti d'un alchimiste renommé a disparu durant sa tournée de récolte d'ingrédients. En suivant ses pas, le groupe découvre qu'il a suivi un accès menant en Outreterre.\nLe réseau de galeries conduit jusqu'à un cimetière abandonné, où se propage une colonie de champignons dangereux, redoutés par les paisibles myconides vivant non loin, et qui ont secourus l'apprenti in extremis.`,
    image: getImage(''),
  },
  {
    title: 'Le royaume enseveli',
    notionUrl:
      'https://nosy-seeder-540.notion.site/Le-royaume-enseveli-33d48197325e8191a607eda6d68fd277',
    description: `Victime d'une malédiction, le roi se meurt. Les bas quartiers sont le lieu idéal pour trouver le coupable, rassemblant les individus douteux dirigés par l'Impératrice.\nSous les bas-quartiers, une ancienne cité abandonnée voit le retour de son premier souverain, réveillé d'un sommeil millénaire sous les traits d'une momie cherchant à reconquérir son ancien royaume.`,
    image: getImage(''),
  },
  {
    title: 'Le dieu de la forêt',
    notionUrl:
      'https://nosy-seeder-540.notion.site/Le-dieu-de-la-for-t-33d48197325e8159b798f1af5971dbec',
    description: `Un monarque est assassiné par proches. Ceux-ci sont conscient de leur acte mais ne l'explique pas.\nMais le nouveau régent s'est trahi : il possède des informations qu'il ne devrait pas avoir. Et son rendez-vous avec des hobgobelins pour raser un village elfique ne laisse plus de place au doute.\nDepuis le coeur de la forêt, un ignoble dragon vert orchestre tous les complots pour son propre compte.`,
    image: getImage(''),
  },
  {
    title: 'Pixies en danger !',
    notionUrl:
      'https://nosy-seeder-540.notion.site/Pixies-en-danger-33d48197325e81feb392d80e03ccfc50',
    description: `Une forêt luxuriante est en proie à une sombre menace. Un village pixie a perdu le contact avec les villages voisins.
Une sinistre noirceur infiltre la forêt, couvrant les arbres et les créatures sauvages de toiles.
Mais les ettercaps qui se sont emparés de cette partie de la forêt ne sont pas la plus grande menace. Tapi dans les tréfonds d'une grotte obscure, un drider se délecte des esprits follets.`,
    image: getImage(''),
  },
  {
    title: "La voix de l'ombre",
    notionUrl:
      'https://nosy-seeder-540.notion.site/La-voix-de-l-ombre-33d48197325e813caf14fc1daa88c44f',
    description: `Un cirque ambulant cherche à capturer un animal parlant. L'animal, aperçu près d'une zone interdite infestée d'ankhegs, semble insaisissable.\nPour pénétrer la zone, la seule solution est de s'acoquiner avec des bandits. L'un d'eux les mène jusqu'au chef, un sanglier garou, qui les piège et les expédie directement au coeur du nid d'ankheg, avant de rejoindre son repaire, un clocher abandonné.`,
    image: getImage(''),
  },
  {
    title: 'Envaser',
    notionUrl: 'https://nosy-seeder-540.notion.site/Envaser-33d48197325e8167bfb2e6e26ae91640',
    description: `Une tentative d'assassinat contre un mage dévoile que les comploteurs viennent d'un fort non loin. La vengeance du mage, terrible, ne laisse dans le fort qu'un survivant traumatisé, affirmant que le mage n'est pas celui qu'il prétend être.\nDe retour en ville, le mage révèle sa véritable nature : un oblex ancien, qui possède un parchemin pour invoquer une horreur crainte des dieux eux-mêmes, un blob d'annihilation.`,
    image: getImage(''),
  },
  {
    title: 'Tout feu, tout flamme',
    notionUrl:
      'https://nosy-seeder-540.notion.site/Tout-feu-tout-flamme-33d48197325e81e6b94df13631c974eb',
    description: `Un village voit ses eaux bouillir. Selon la légende, un malheur est sur le point de frapper. Pour les protéger, le chef veut récupérer une épée légendaire, cachée au cœur du volcan surplombant le hameau.\nMais dans le volcan, un géant du feu a élu domicile...\nLorsque le groupe récupère enfin l'arme légendaire et revient au village, leur joie est de courte durée. Le volcan entre en éruption, vomissant une armée de salamandres belliqueuses.`,
    image: getImage(''),
  },
  {
    title: 'Prison cristalline',
    notionUrl:
      'https://nosy-seeder-540.notion.site/Prison-cristalline-33d48197325e8104828cf3c9477284aa',
    description: `Un étudiant, avide d'étudier une chimère, demande l'aide des aventuriers pour convaincre un druide qui en détient une en captivité. D'abord réticent, le druide demande au groupe de l'assister dans une tâche avant de les autoriser à voir la bête.\nLorsqu'il les conduit jusqu'à une ancienne mine servant de prison, la surprise est de taille lorsque la bête est libre, sortie de sa prison cristalline par un xorn affamé.`,
    image: getImage(''),
  },
  {
    title: 'La ruine du serpent osseux',
    notionUrl:
      'https://nosy-seeder-540.notion.site/La-ruine-du-serpent-osseux-33d48197325e811d9f04fdab2b0a6083',
    description: `Une ruine archéologique tout juste découverte a été envahie par des bandits menés par un groupe de sectaires.\nCapturant les archéologues afin de les sacrifier pour agrandir leur macabre armée, le sectaire en chef a pour projet de ressusciter un ancien naga osseux.`,
    image: getImage(''),
  },
  {
    title: 'Le solstice des héros',
    notionUrl:
      'https://nosy-seeder-540.notion.site/Le-solstice-des-h-ros-33d48197325e818f9b87f2556e23552a',
    description: `Le solstice des héros, une semaine de fête pour célébrer l'été, permet à quiconque de défier l'Arène, promettant une récompense fabuleuse pour les vainqueurs.
  Un mécène, intéressé par la récompense, propose au groupe de combattre pour lui.
  Durant une semaine, les combats auront lieu, chacun d'un style différent et spectaculaire, jusqu'à rejoindre l'Arène rouge, réservée aux meilleurs gladiateurs.
  Mais l'arène, malgré ses dangers, révèle une surprise encore plus étonnante : la structure de l'arène elle-même est un mimique.`,
    image: getImage(''),
  },
  {
    title: "La mort n'est qu'un autre chemin",
    notionUrl:
      'https://nosy-seeder-540.notion.site/La-mort-n-est-qu-un-autre-chemin-33d48197325e81b18c83e672f0fc532a',
    description: `Persuadé d'avoir découvert des complices d'un nécromancien, un employeur recrute le groupe pour se faire passer pour mort et être ramassé par un groupe d'aventuriers arpentant les routes pour y récolter les cadavres.
  Lorsque ceux-ci sont déposés dans une fosse commune, les choses se compliquent. Le cimetière souterrain rassemble les dépouilles de personnes malveillantes, dont les esprits réincarnés défendent une crypte isolée.
  Au plus profond de cette crypte, une blême cherche à s'approprier la puissance d'une liche en menant d'atroces expériences sur les cadavres.`,
    image: getImage(''),
  },
  {
    title: 'Les crocs du désert',
    notionUrl:
      'https://nosy-seeder-540.notion.site/Les-crocs-du-d-sert-33d48197325e814c8ec1f48d57bf0997',
    description: `Lorsqu'un détachement gnoll attache une caravane, la mauvaise nouvelle tombe : ces monstres ne sont que des éclaireurs. La caravane est passée non loin d'une oasis, d'où pourraient provenir les monstres.
  Mais en arrivant sur place, ce sont d'effroyables lamies qui subissent la frénésie des gnolls. Plus puissantes, elles repoussent les créatures avant de s'en prendre au groupe.
  Remontant plus loin la piste gnoll, le groupe découvre une faille rocheuse servant de tanière à la meute. `,
    image: getImage(''),
  },
  {
    title: 'Le berger du troupeau',
    notionUrl:
      'https://nosy-seeder-540.notion.site/Le-berger-du-troupeau-33d48197325e81bfad39d9e32902eefb',
    description: `Un érudit effondré pleure la disparition de son compagnon, un sphinx l'assistant dans ses recherches. Persuadé qu'il s'agit des clercs qui discréditent son travail, il cherche à retrouver son compagnon et les menace.
  Loin de paraitre concernés, les clercs l'accusent de semer le trouble en vantant l'existence d'un gardien qui n'a jamais été vu par quiconque.
  Pour prouver son existence, le groupe doit aller à sa rencontre, dans une mystérieuse tour ne possédant aucune entrée. Le gardien existe bel et bien, un oni ancien, furieux que les clercs cherchent à nier son existence.
  Le groupe devra faire un choix : vaincre l'oni vengeur ou rétablir la vérité sur son existence.`,
    image: getImage(''),
  },
  {
    title: 'Forteresse de glace',
    notionUrl:
      'https://nosy-seeder-540.notion.site/Forteresse-de-glace-33d48197325e81d581b5d757805baeba',
    description: `Plusieurs communautés des terres glacées dépendent des vivres d'un fournisseur. Lorsque ce dernier les leur apporte, il est surpris de voir que les vivres sont attelées pour être livrées à d'autre tandis que les villageois meurent de faim.
  Suivant les traineaux, le groupe découvre la vérité. Un camp de kobolds s'accaparent les ressources alentours, pour nourrir leur maitre, un jeune dragon blanc.
  Mais le pouvoir de destruction du dragon semble être entre les mains d'un diable gelé tirant les ficelles.`,
    image: getImage(''),
  },
  {
    title: 'Gardiens du désert',
    notionUrl:
      'https://nosy-seeder-540.notion.site/Gardiens-du-d-sert-33d48197325e8151ae93d80f1e7f184f',
    description: `Après avoir perdu sa monture au jeux, un marchand ambulant se voit contraint d'en trouver une nouvelle. Heureusement pour lui, il dispose d'une carte menant à une ville en ruines, demeure d'un scorpion géant qu'il souhaiterait dompter.
  Mais les lieux sont envahis de yuan-ti gardant l'entrée d'une pyramide.
  Niché au cœur de la pyramide, protégé par les thri-kreens, le scorpion géant s'est lié d'amitié avec la plus improbable des créatures, un élémentaire de terre.`,
    image: getImage(''),
  },
  {
    title: 'Un anneau pour les gouverner tous',
    notionUrl:
      'https://nosy-seeder-540.notion.site/Un-anneau-pour-les-gouverner-tous-33d48197325e8194ab7ed4ae3bca695a',
    description: `Une déité souhaite la mort d'une créature vivant dans une ruine et convoitant un pouvoir bien trop grand pour elle, un anneau de souhait.
  Enfouie au plus profond d'un marais, la ruine est la demeure d'un puissant naga corrupteur, que la quête de puissance pour obtenir l'anneau a conduit jusqu'ici.
  Lorsque le groupe pense l'avoir défait, et rentre triomphalement, ce dernier revient à la vie pour fouiller une ruine jumelle dans laquelle les gobelins sous ses ordres pensent avoir déniché l'anneau.
  Qui du groupe ou du naga parviendra à s'emparer du pouvoir absolu le premier ?`,
    image: getImage(''),
  },
  {
    title: 'David et Goliath',
    notionUrl:
      'https://nosy-seeder-540.notion.site/David-et-Goliath-33d48197325e81a78a17e21941dea74e',
    description: `La fête locale ne peut démarrer sans la livraison d'alcool attendue depuis plusieurs jours. Les abords du vignoble étant dangereux, le groupe est missionné pour s'y rendre.
  Le vignoble, entretenu par des myconides, a été attaqué. D'énormes empreintes marquent le sol, et le vigneron, ancien aventurier reconverti, a disparu.
  Les empreintes mènent jusqu'au camp de plusieurs géants, qui ont volé l'alcool du vignoble pour s'enivrer.`,
    image: getImage(''),
  },
  {
    title: 'Maître des airs',
    notionUrl:
      'https://nosy-seeder-540.notion.site/Ma-tre-des-airs-33d48197325e81d8bbb5fad753ab7ed4',
    description: `La mise à sac d'un village par un dirigeable interroge. Le naga gardien qui le contrôle est pacifique.
  Sur le lieu de réapprovisionnement, des pirates se sont emparés du navire, emprisonnant le naga.
  Infiltrés à bord, le groupe doit saborder le navire, et neutraliser le capitaine afin de l'empêcher de nuire définitivement`,
    image: getImage(''),
  },
  {
    title: 'Mort et désolation',
    notionUrl:
      'https://nosy-seeder-540.notion.site/Mort-et-d-solation-33d48197325e81a994c5e4a3e9f69643',
    description: `De nombreux villages sont en flammes, visibles depuis la capitale. Une armée gobeline menée par des hobgobelins est en marche, venant de l'est. Mais à l'ouest, la cavalerie stationnée en renfort est surprise par une seconde armée funeste, formée de morts innombrables.
  Alors que la capitale est attaquée de toutes parts, la véritable menace se dévoile lorsque le mur extérieur s'effondre : un dragon noir vénérable mène les armées monstrueuses.
  Envoyant toutes les forces restantes dans un assaut suicidaire, le dirigeant escompte détourner l'attention du dragon afin que les aventuriers puissent le défaire, mettant un terme définitif à la menace.`,
    image: getImage(''),
  },
  {
    title: 'Prédateur et prédateur alpha',
    notionUrl:
      'https://nosy-seeder-540.notion.site/Pr-dateur-et-pr-dateur-alpha-33d48197325e813eafd3c3bd1c2c764b',
    description: `Un villageois désemparé a vu son bétail dévoré par des bulettes.
  Sur place, seuls plusieurs buletiots sont encore présent. Remontant vers le nid, il s'avère que les bulettes, bien qu'agressives, ont été chassées par des ankhegs.
  Le réseau de tunnels menant à leur nid conduit jusqu'à un dôme, où un mastodonte des ombres est devenu le chef de la colonie en massacrant l'ankheg alpha qui la dirigeait précédemment.`,
    image: getImage(''),
  },
  {
    title: 'La Cité des Brumes',
    notionUrl:
      'https://nosy-seeder-540.notion.site/La-Cit-des-Brumes-33d48197325e81e39b39ed7d7046757d',
    description: `Un mystérieux saboteur libère les créatures dangereuses enfermées dans des cages à la Dent de l'Océan, avant de s'enfuir avec elles en direction d'une cité abandonnée plongée dans la brume. Errance, créatures volantes et énigmes sont les maîtres mots de cette aventure.`,
    image: getImage(''),
  },
  {
    title: 'Hôtel infini',
    notionUrl: 'https://nosy-seeder-540.notion.site/H-tel-infini-33d48197325e81cba7a6dead7a76fbb2',
    description: `Un meurtre impossible a eu lieu dans un hôtel prestigieux, aux chambres extra-planaires.
  Les gérants, soucieux de protéger les résidents et de retrouver le coupable, cherchent à activer le golem protecteur des lieux. Mais la clé pour l'activer est divisée en cinq fragments, dispersés dans des chambres dangereuses.
  Lorsque ceux-ci sont assemblés, le golem révèle une chambre inconnue, où se terre l'assassin.`,
    image: getImage(''),
  },
  {
    title: 'Qui sifflent sur vos têtes',
    notionUrl:
      'https://nosy-seeder-540.notion.site/Qui-sifflent-sur-vos-t-tes-33d48197325e8109be23fcb956793137',
    description: `Devant l'augmentation abusive des taxes, des manifestations visent à bloquer l'accès aux collecteurs. Voulues pacifique, tout dégénère après l'attaque d'un chariot de collecte.
  Après avoir protégé les manifestants, le groupe est convié à une réunion secrète, malheureusement interrompue par la dénonciation d'un traitre.
  Emprisonné, le groupe est libéré par un dirigeant afin d'enquêter sur la corruption du conseil.
  Remontant la piste jusqu'à un temple souterrain, le chaos ambiant de la ville est le fruit des manipulations d'une abomination yuan-ti`,
    image: getImage(''),
  },
  {
    title: 'Roulotte de cirque',
    notionUrl:
      'https://nosy-seeder-540.notion.site/Roulotte-de-cirque-33d48197325e81028dd0e513a30f60fd',
    description: `Un charlatan venu d'un cirque de passage est accusé d'empoisonner ses clients.
  Se rendant sur place, le groupe découvre une roulotte contenant des plans extra-planaires.
  Bernés par leur hôte, les aventuriers se retrouvent contraint d'affronter plusieurs épreuves afin d'atteindre le chef de la roulotte.`,
    image: getImage(''),
  },
  {
    title: 'Trésor maudit',
    notionUrl: 'https://nosy-seeder-540.notion.site/Tr-sor-maudit-33d48197325e81abb6d6f7e9e070a2b5',
    description: `Une ville est attaquée par 2 navires pirates, qui y dérobent un artefact symbolique, ainsi qu'une partie des richesses.
  En poursuivant les navires, le groupe rattrape l'un des vaisseaux mais une violente tempête les envoie tous deux par le fond.
  Echouant sur l'île servant de repaire aux pirates, les aventuriers découvrent que l'artefact est en réalité une clé convoitée par ces derniers pour accéder aux richesses d'une ruine dominant l'île toute entière`,
    image: getImage(''),
  },
  {
    title: 'Rats du désert',
    notionUrl:
      'https://nosy-seeder-540.notion.site/Rats-du-d-sert-33d48197325e8135b775e0bee4bd8516',
    description: `Un marchand s'est fait dérober un joyau instable par sa propre fille, à la tête d'un groupe de bandits.
  Le joyau, instable, menace d'exploser.
  Pour le récupérer, il faudra traverser le désert, lieu de vie des vers pourpres. Mais un homme a créé un modèle de bateau à voile glissant sur le sable.
  Arrivés jusqu'au repaire des criminels, les aventuriers devront agir rapidement pour récupérer le joyau avant qu'il ne soit trop tard`,
    image: getImage(''),
  },
  {
    title: "L'île verdoyante",
    notionUrl:
      'https://nosy-seeder-540.notion.site/L-le-verdoyante-33d48197325e81f1bde6cdfcf8b0b80a',
    description: `Une femme désespérée cherche à retrouver son mari disparu sur une île mystérieuse lors d'un duel. Corruption fongique et ruines antiques sont les éléments clés de cette aventure.`,
    image: getImage(''),
  },
  {
    title: 'Village lycanthrope',
    notionUrl:
      'https://nosy-seeder-540.notion.site/Village-lycanthrope-33d48197325e81018f05e331850e5de0',
    description: ``,
    image: getImage(''),
  },
  {
    title: 'Spectacle de marionnettes',
    notionUrl:
      'https://nosy-seeder-540.notion.site/Spectacle-de-marionnettes-33d48197325e81ec9f7cc197987147bf',
    description: `Jaillissant d'un portail extra planaire, des zombis attaquent une ville.
  De l'autre côté du portail, un théâtre est le cadre d'un étrange jeu : un vampire force ceux qui passent le portail a jouer une pièce de théâtre, massacrant ou menaçant ceux qui s'y refusent.`,
    image: getImage(''),
  },
  {
    title: 'Gardien de la souffrance',
    notionUrl:
      'https://nosy-seeder-540.notion.site/Gardien-de-la-souffrance-33d48197325e81d79518e7394c488612',
    description: `Lorsqu'une communauté réputée pour ses potions puissantes est attaquée par les créatures sauvages des marais, elle demande l'aide d'un groupe d'aventuriers.
  Bien que sauvages, les créatures sont organisées et collaborent alors qu'elles ne le devraient pas.
  Pénétrant au cœur du marais, le groupe découvre un temple dédié à la gloire d'une déité crocodile. Dans le temple, un seigneur des bêtes rassemble autour de lui les crocodiles massacrés pour leur sang permettant de concevoir les potions.
  Il laisse le choix au village : abandonner cette ignoble pratique ou périr`,
    image: getImage(''),
  },
  {
    title: 'Relique dans la cité souterraine',
    notionUrl:
      'https://nosy-seeder-540.notion.site/Relique-dans-la-cit-souterraine-33d48197325e8142ac65f97b7489e2b8',
    description: `Invités par un équipementier, un svirfnebelin de renom, la cité svirfnebeline est en état de siège. Une maison drow tombée en disgrâce auprès de Lolth cherche à s'approprier la relique du temple svirfnebelin.
  Repoussant les assauts drows, les aventuriers doivent sécuriser la relique, avant que les prêtres proposent de s'en servir comme appât pour ensevelir la cheffe de maison drow sous les décombres, pour se débarrasser de sa maison une fois pour toutes`,
    image: getImage(''),
  },
  {
    title: 'Stratégie martiale',
    notionUrl:
      'https://nosy-seeder-540.notion.site/Strat-gie-martiale-33d48197325e81218a3ef855de494d6f',
    description: `Un fort est pris par un détachement hobgobelin. En s'infiltrant dans ce dernier, le groupe découvre l'audacieuse stratégie des monstres, une manticore plongeant depuis les cieux pour ouvrir les portes depuis l'intérieur, permettant aux hobgobelins d'investir les lieux eficacement.
  Après avoir repris le fort, le groupe découvre que le détachement souhaitait tenir le lieu pour une division plus large, en marche vers le fort.
  Avec l'aide de la cavalerie, le groupe est chargé d'anéantir les envahisseurs`,
    image: getImage(''),
  },
  {
    title: 'Ère glaciaire',
    notionUrl: 'https://nosy-seeder-540.notion.site/re-glaciaire-33d48197325e81f8b8d1c3d1dca979e7',
    description: `En arrivant dans un village Goliath pour y solliciter l'aide d'un forgeur d'armes exceptionnel, celui-ci prépare une expédition pour retrouver un éleveur d'aurochs disparu depuis plusieurs jours. Durant l'expédition, le groupe est attaqué par un remorhaz, près de l'endroit où vit le berger. Des traces de fuite mènent le groupe jusqu'à une ancienne cathédrale. Dans cette cathédrale, les oeufs de remorhaz et les jeunes ont attiré un géant du givre, qui a massacré les bodaks s'y trouvant, et se nourrit des aurochs.`,
    image: getImage(''),
  },
  {
    title: 'Tremblement de terre révélateur',
    notionUrl:
      'https://nosy-seeder-540.notion.site/Tremblement-de-terre-r-v-lateur-33d48197325e8189a357d186ef690ea5',
    description: `Un tremblement de terre provoque un éboulement de plusieurs maisons, révélant un ancien quartier sous le quartier actuel.
  Parmi les lieux abandonnés, des créatures rodeuses ont élu domicile, et une horde de goules voraces hante l'ancien cimetière.`,
    image: getImage(''),
  },
  {
    title: "Dans l'ombre du volcan",
    notionUrl:
      'https://nosy-seeder-540.notion.site/Dans-l-ombre-du-volcan-33d48197325e81faa13ffe2b53b03f55',
    description: `Une éruption volcanique met au jour une fonderie masquée auparavant par une cascade de lave.
  Profitant de l'opportunité, un groupe est monté pour l'explorer et en extraire les éventuelles richesses. Mais la fonderie masque de sombres secrets.
  Parmi les décombres, des azers travaillent à forger des reliques pour le compte d'un sinistre dragon d'ombre`,
    image: getImage(''),
  },
  {
    title: 'Collision avec le Labyrinthe sans fin',
    notionUrl:
      'https://nosy-seeder-540.notion.site/Collision-avec-le-Labyrinthe-sans-fin-33d48197325e81c89b33c6a3b90453d6',
    description: `Le roi convoque le groupe pour admirer leur style de combat dans les jardins royaux, dont la végétation menace la tranquillité des lieux.
  A peine le divertissement royal terminé, la cité entière se brise, les murs et bâtiments se déformant pour créer un immense labyrinthe urbain, un sceau immense se dessinant dans le ciel.
  En approchant du point d'origine, la menace se précise : minotaures par hordes entières et garostro dévastateurs au cœur d'un labyrinthe où la gravité elle-même peut basculer, le Labyrinthe sans fin est en collision avec la cité.
  Les hiérophantes malveillants à l'œuvre souhaitent invoquer un seigneur démon, le redoutable Baphomet.`,
    image: getImage(''),
  },
]
