-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Creato il: Dic 13, 2019 alle 21:28
-- Versione del server: 5.7.26
-- Versione PHP: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `aquarium_admin`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `pesci`
--

DROP TABLE IF EXISTS `pesci`;
CREATE TABLE IF NOT EXISTS `pesci` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(255) NOT NULL,
  `nome` varchar(25) NOT NULL,
  `famiglia` varchar(45) NOT NULL,
  `dimensioni` varchar(45) NOT NULL,
  `provenienza` varchar(45) NOT NULL,
  `carattere` varchar(12) NOT NULL,
  `alimentazione` varchar(12) NOT NULL,
  `pH` varchar(12) NOT NULL,
  `dH` varchar(12) NOT NULL,
  `temperatura` varchar(12) NOT NULL,
  `litraggioMinimo` varchar(50) NOT NULL,
  `adattoAcquarioComunità` varchar(12) NOT NULL,
  `descrizione` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `pesci`
--

INSERT INTO `pesci` (`id`, `image`, `nome`, `famiglia`, `dimensioni`, `provenienza`, `carattere`, `alimentazione`, `pH`, `dH`, `temperatura`, `litraggioMinimo`, `adattoAcquarioComunità`, `descrizione`) VALUES
(1, 'guppy.jpg', 'Poecilia Reticulata', 'Poecilidi', '3.5cm M/5cm F', 'Sud America', 'Pacifico', 'Onnivoro', '7/9', '9/19', '18/28°', '50 lt per 6 esemplari', 'Si', 'Sono considerati i pesci da acquario di comunità per eccellenza,va tenuto con compagni di vasca pacifici e non territoriali, poichè in caso di compagni di vasca territoriali o aggressivi (betta splendens e barbus prevalentemente) tenderanno ad attaccarli per la coda e i colori vistosi.\r\n\r\nVanno allevati in gruppo, con almeno 3 femmine e 1 maschi, il numero delle femmine deve essere superiore a quello dei maschi, altrimenti si stressano troppo\r\n'),
(2, 'endler.jpg', 'Poecilia Wingei', 'Poecilidi', '2.5cm M/4.5cm F', 'Sud America', 'Pacifico', 'Onnivoro', '7/8.5', '15/35', '18/28°', '25 lt per un gruppo di 6 esemplari', 'No', 'Hanno un rapporto in apparenza molto stretto con alcune popolazioni di guppy selvatici, cosa che molte volte li porta a essere venduti per poecilia reticulata nei negozi. Si possono ibridare con quest\'ultimi, quindi si sconsiglia di tenerli insieme se si vuole tenere una linea \"pura\".'),
(3, 'molly.jpg', 'Poecilia Sphenops', 'Poecilidi', '8cm M/12cm F', 'America Centrale/Sud America', 'Pacifico', 'Onnivoro', '7.5/8.2', '11/30', '18/28°', '80 lt per 6 esemplari', 'Si', 'Diffusissimi pesci d\'acquario, al pari dei Poecilia Reticulata hanno la fama di essere robusti e \"facili\", anche se vengono venduti come pesci d\'acqua dolce sono di acqua salmastra. Vivere in acqua dolce non dà loro problemi,  ma a lungo andare può provocare loro problemi di salute scaturite da fungosiche possono diventare dirompenti e provocarne anche la morte se non curate nel modo giusto'),
(4, 'portaspada.jpg', 'Xiphophorus Helleri', 'Poecilidi', '14/16 cm', 'America Centrale e del Nord', 'Pacifico', 'Onnivoro', '7/8', '9/19', '25/27°', '100 per un gruppo da 6', 'No', 'uno tra i pesci d\'acquario più riconoscibili del mondo e onnipresente nel commercio dei pesci ornamentali.\r\n\r\nNonostante la loro diffusione, in realtà non sono adatti alle comuni vasche di comunità, che sono in genere decisamente piccole per consentire un loro corretto sviluppo\r\n\r\n'),
(5, 'gambusia.jpg', 'Gambusia holbrooki', 'Poecilidi', '3.5cm M/5cm F', 'America e Europa', 'Aggressivo', 'Carnivoro', '7/9', '9/19', '18/28°', '50lt per 6 esemplari', 'no', 'Piccolo Poecilide Americano, dalla forma molto simile al Poecilia Reticulata, molto meno colorato, ma di cui condivide molte caratteristiche.\r\n\r\nStoricamente è diventato importante per la convinzione che fosse la soluzione definitiva e “biologica” per i controllo della zanzara. In Italia è stato introdotto nel 1922 nel Lazio, e da lì in tutte le zone malariche d’Italia, al fine di ridurre le zanzare e di debellare la malaria.'),
(6, 'platy.jpg', 'Xiphophorus maculatus', 'Poecilidi', '6 cm', 'Nord e Centro America', 'Pacifico', 'onnivoro', '7/8', '9/19', '18 - 25°', '50lt per 6 esemplari', 'Si', 'I Platy sono tra i più diffusi pesci d\'acquario, considerati adattissimi ai principianti, anche perché si riproducono facilmente in acqua di rubinetto. '),
(7, 'astronotus.jpg', 'Astronotus ocellatus', 'Ciclidi', '45 cm', 'Sud America', 'Aggressivo', 'Onnivora', '6/8', '5/19', '22/25°', '500 lt per una coppia', 'No', 'L\'Astronotus ocellatus, unico tra i pesci d\'acquario poichè è uno dei pochissimi pesci che si relazione con il proprio \"padrone\".\r\n\r\nLa vasca deve essere arredata in modo minimale e senza piante, poichè ha abitudini scavatorie e sposta addirittura rocce e legni come meglio credono loro.\r\n\r\n\r\n\r\n'),
(8, 'boraras-maculatus.jpg', 'Boraras Maculatus', 'Ciprinidi', '2.5 cm', 'Penisola Malese', 'pacifico', 'predatore', '5/6', '5/12', '24/26', '35 lt per un gruppo da 10', 'No', 'Vanno allevati in gruppo, sono molto attivi, e i maschi diventano territoriali quando entrano in riproduzione.\r\nL\'ideale è allevarlo in un acquario fittamente piantumato.\r\n\r\nProvengono da un ambiente a corrente bassa, quindi la filtrazione non troppo forte, l\'acqua è del colore del té a causa del rilascio di tannini e di altre sostanze chimiche da parte della materia organica in decomposizione'),
(9, 'boraras.brigittae.jpg', 'Boraras Brigittae', 'Ciprinidi', '2.5 cm', 'Asia', 'Pacifico', 'Predatore', '6.5/7', '10', '25/28°', '35 lt per un gruppo da 10', 'No', 'Vanno allevati in gruppo, sono molto attivi, e i maschi diventano territoriali quando entrano in riproduzione.\r\nL\'ideale è allevarlo in un acquario fittamente piantumato.\r\n\r\nProvengono da un ambiente a corrente bassa, quindi la filtrazione non troppo forte, l\'acqua è del colore del té a causa del rilascio di tannini e di altre sostanze chimiche da parte della materia organica in decomposizione'),
(10, 'corydoras aeneus.jpg', 'Corydoras Aeneus', 'Calittidi', '7.5', 'Sud America', 'Pacifico', 'Onnivora', '6.5/7.5', '5/19', '24°', '60 lt per un gruppo da 6 esemplari', 'Si', 'Possono facoltativamente respirare aria atmosferica e possiedono una versione modificata dell\'intestino, altamente vascolarizzato, il quale gli permette l\'assorbimento di ossigeno atmosferico e aiutare la sopravvivenza in ambienti poveri di ossigeno. \r\n\r\nE\' preferibile allestirlo con molte zone d\'ombra, rocce cave, radici arcuate, piante a cespuglio e galleggianti.Necessario è un substrato sabbioso o ghiaia arrotondata per evitare il danneggiamento dei barbigli dei pesci quando grufolano il fondale.'),
(11, 'Corydoras agassizi.jpg', 'Corydoras Agassizi', 'Calittidi', '5', 'Sud America', 'Pacifico', 'Onnivora', '6.5/7.5', '5/19', '24°', '50 lt per 6 esemplari', 'Si', 'Possono facoltativamente respirare aria atmosferica e possiedono una versione modificata dell\'intestino, altamente vascolarizzato, il quale gli permette l\'assorbimento di ossigeno atmosferico e aiutare la sopravvivenza in ambienti poveri di ossigeno. \r\n\r\nE\' preferibile allestirlo con molte zone d\'ombra, rocce cave, radici arcuate, piante a cespuglio e galleggianti.Necessario è un substrato sabbioso o ghiaia arrotondata per evitare il danneggiamento dei barbigli dei pesci quando grufolano il fondale.'),
(12, 'corydoras habrosus.jpg', 'Corydoras Habrosus', 'Calittidi', '2.5 cm', 'Sud America', 'Pacifico', 'Onnivora', '6/8', '2/25', '25', '40lt per un gruppo di 6', 'Si', 'Versione miniaturizzata dei Corydoras.\r\n<br>\r\nVanno previste zone d\'ombra per dare sicurezza ai pesci, formate da rocce cave, radici arcuate, piante a cespuglio e galleggianti. Il substrato ideale è la sabbia, anche se la ghiaia arrotondata è un\'alternativa accettabile, a condizione che venga tenuta scrupolosamente pulita, in quanto sono sensibili ai substrati scarsamente mantenuti o sporchi e possono perdere i loro barbigli se allevati in condizioni precarie. Anche un substrato non arrotondato e regolare può danneggiare seriamente i barbigli dei pesci quando cercano di \"arare\" il fondale.'),
(13, 'corydoras hastatus.jpg', 'Corydoras Hastatus', 'Calittidi', '2.5 cm', 'Sud America', 'Pacifico', 'Onnivora', '6/8', '5/19', '25°', '40lt per un gruppo di 6', 'Si', 'Non facilissima da trovare in commercio, questa specie a differenza della maggior parte dei Corydoras tende a nuotare a mezz\'acqua e trascorre gran parte del suo tempo lontano dal substrato, facendo spesso un branco unico con caracidi dalle dimensioni e aspetto simile.\r\n\r\nPossono facoltativamente respirare aria atmosferica e possiedono una versione modificata dell\'intestino, altamente vascolarizzato, il quale gli permette l\'assorbimento di ossigeno atmosferico e aiutare la sopravvivenza in ambienti poveri di ossigeno. \r\n\r\nE\' preferibile allestirlo con molte zone d\'ombra, rocce cave, radici arcuate, piante a cespuglio e galleggianti.Necessario è un substrato sabbioso o ghiaia arrotondata per evitare il danneggiamento dei barbigli dei pesci quando grufolano il fondale.'),
(14, 'corydoras julii.jpg', 'Corydoras Julii', 'Calittidi', ' 5 cm', 'Sud America', 'Pacifico', 'Onnivora', '6/8', '5/19', '24/26', '80 lt per 6 esemplari', 'Si', 'Possono facoltativamente respirare aria atmosferica e possiedono una versione modificata dell\'intestino, altamente vascolarizzato, il quale gli permette l\'assorbimento di ossigeno atmosferico e aiutare la sopravvivenza in ambienti poveri di ossigeno. \r\n\r\nE\' preferibile allestirlo con molte zone d\'ombra, rocce cave, radici arcuate, piante a cespuglio e galleggianti.Necessario è un substrato sabbioso o ghiaia arrotondata per evitare il danneggiamento dei barbigli dei pesci quando grufolano il fondale.'),
(15, 'Corydoras schwarzi.jpg', 'Corydoras Schwarzi', 'Calittidi', '5 cm', 'Sud America', 'Pacifico', 'Onnivora', '6/7', '5/13', '26°', '80 lt per 6 esemplari', 'Si', 'Possono facoltativamente respirare aria atmosferica e possiedono una versione modificata dell\'intestino, altamente vascolarizzato, il quale gli permette l\'assorbimento di ossigeno atmosferico e aiutare la sopravvivenza in ambienti poveri di ossigeno. \r\n\r\nE\' preferibile allestirlo con molte zone d\'ombra, rocce cave, radici arcuate, piante a cespuglio e galleggianti.Necessario è un substrato sabbioso o ghiaia arrotondata per evitare il danneggiamento dei barbigli dei pesci quando grufolano il fondale.'),
(16, 'corydoras sterbay.jpg', 'Corydoras Sterbay', 'Calittidi', '6.8', 'Sud America', 'Pacifico', 'Onnivora', '6/8', '2/25', '23°', '50 lt per 6 esemplari', 'Si', 'E\' la più facile da trovare in commercio, ed è anche una tra quelle considerate più facili da riprodurre.Possono facoltativamente respirare aria atmosferica e possiedono una versione modificata dell\'intestino, altamente vascolarizzato, il quale gli permette l\'assorbimento di ossigeno atmosferico e aiutare la sopravvivenza in ambienti poveri di ossigeno. \r\n\r\nE\' preferibile allestirlo con molte zone d\'ombra, rocce cave, radici arcuate, piante a cespuglio e galleggianti.Necessario è un substrato sabbioso o ghiaia arrotondata per evitare il danneggiamento dei barbigli dei pesci quando grufolano il fondale.'),
(17, 'Corydoras-paleatus.jpg', 'Corydoras Paleatus', 'Calittidi', '6 cm', 'Sud America', 'Pacifico', 'Onnivora', '6/8', '5/19', '19°', '60 lt per un gruppo da 6 esemplari', 'Si', 'Vanno previste zone d\'ombra, formate da rocce cave, radici arcuate, piante a cespuglio e galleggianti. Il substrato ideale è la sabbia, anche se la ghiaia arrotondata è un\'alternativa accettabile, a condizione che venga tenuta scrupolosamente pulita. un substrato non arrotondato e regolare può danneggiare seriamente i barbigli dei pesci quando cercano di \"arare\" il fondale'),
(18, 'corydoras.panda.jpg', 'Corydoras Panda', 'Calittidi', '4 cm', 'Sud America', 'Pacifico', 'Onnivora', '6/7.5', '2/12', '22/25°', '60 lt per un gruppo da 6 esemplari', 'Si', 'Possono facoltativamente respirare aria atmosferica e possiedono una versione modificata dell\'intestino, altamente vascolarizzato, il quale gli permette l\'assorbimento di ossigeno atmosferico e aiutare la sopravvivenza in ambienti poveri di ossigeno. \r\n\r\nE\' preferibile allestirlo con molte zone d\'ombra, rocce cave, radici arcuate, piante a cespuglio e galleggianti.Necessario è un substrato sabbioso o ghiaia arrotondata per evitare il danneggiamento dei barbigli dei pesci quando grufolano il fondale.'),
(19, 'Otocinclus.jpg', 'Otocinclus Vittatus', 'Loricaridi', '3 cm', 'Sud America', 'Pacifico', 'Vegetariana', '5.5/7', '2/18', '25°', '60 lt per un gruppo da 6 esemplari', 'Si', 'Loricaride di piccole dimensioni e molto timidi, l\'acquario deve essere fittamente piantumato e ricco di nasccondigli in modo che non soffra lo stress.\r\n\r\nAdatto per acquari di comunità, ma attenzione ai compagni di vasca, si SCONSIGLIANO compagni di vasca più grossi e aggressivi poichè diventa facile preda. \r\nVa inserito obbligatoriamente in acquari maturi, poichè si nutre principalmente di alghe e biofilm nel primo periodo e lentamente si abituano a pasticche e wafer');

-- --------------------------------------------------------

--
-- Struttura della tabella `piante`
--

DROP TABLE IF EXISTS `piante`;
CREATE TABLE IF NOT EXISTS `piante` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `famiglia` varchar(50) NOT NULL,
  `provenienza` varchar(50) NOT NULL,
  `luce` varchar(50) NOT NULL,
  `ph` varchar(20) NOT NULL,
  `dh` varchar(20) NOT NULL,
  `crescita` varchar(20) NOT NULL,
  `riproduzione` varchar(20) NOT NULL,
  `posizione` varchar(20) NOT NULL,
  `difficolta` varchar(20) NOT NULL,
  `descrizione` text NOT NULL,
  `image` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `piante`
--

INSERT INTO `piante` (`id`, `nome`, `famiglia`, `provenienza`, `luce`, `ph`, `dh`, `crescita`, `riproduzione`, `posizione`, `difficolta`, `descrizione`, `image`) VALUES
(1, 'Aegagropila Linnaei', 'Cladophoraceae', 'Asia', 'Medio/Alta', '6/8.5', '12/30', 'Lenta', 'Talea', 'Primo Piano', 'Facile', 'Aegagropila linnaei è un\'alga verde pluricellulare appartenente alla famiglia delle Cladophoraceae, diffusa nell\'emisfero boreale.\r\n\r\nChiamata in giapponese Marimo ( Mari-Mo ossia Mari pallina e Mo indica generalmente le piante d\'acqua), è conosciuta anche come Cladofora o sasso-pianta o alga a palla. ', 'aegagropila linnaei.jpg'),
(2, 'Alternanthera Reineckii Mini', 'Amaranthaceae', 'Sud America', 'Medio/Alta', '6/8', '3/10', 'Media', 'Talea', 'Secondo Piano ', 'Media', 'Foglia molto stretta meno di mezzo cm di larghezza e una lunghezza di massimo 2 cm, ha uno stelo molto resistente e dal colore acceso ma allo stesso tempo molto sottile, per ogni nodo partono tantissime foglie, quindi in forma sommersa risulta più accestita e rigogliosa grazie all’ innumerevole quantità di foglie per nodo. Cresce leggermente in altezza ma consigliamo di potarla in continuazione, così da tenerla bassa e rigogliosa. A nostro avviso è una varietà ottima per vasche più piccole e consigliabile come varietà di Alternanthera per neofiti, visto che la coltivazione risulta molto più semplice rispetto alle altre Alternanthera.', 'alternanthera-rein-mini.jpg'),
(3, 'Alternanthera Reineckii Mini Rosanervig', 'Amaranthaceae', 'Cultivar', 'Alta', '5/8', '3/20', 'Media', 'Talea', 'Secondo Piano', 'Media', 'Varietà dell\'AAlternanthera reineckii Mini,  ha le stesse caratteristiche ed esigenze della precedente, ma se ne differenzia per l\'avere una crescita più compatta, con lo stelo che cresce meno in altezza.', 'alternanthera-rosanervig.jpg'),
(4, 'Althernanthera cardinalis', 'Amaranthaceae', 'Sud America', 'Alta', '5/7.5', '6/20', 'Medio/Veloce', 'Talea', 'Sfondo', 'Difficile', 'Si presenta con un colore quasi violaceo,le foglie sono tra le più grandi tra le alternantere e possono arrivare da 10 a 15 cm di lunghezza. Ha una crescita velocissima se tenuta bene e non è consigliata per vasche piccole, sopporta leggermente di più il calore, inoltre può stare anche in un constesto più acido,come in natura.', 'Althernanthera cardinalis.jpg'),
(5, 'Ammania Gracilis', 'Lythraceae', 'Africa', 'Alta', '5/8', '3/20', 'Veloce', 'Talea', 'Sfondo/Laterale', 'Media', 'Pianta dal fusto eretto o leggermente incurvato, gambo liscio, spesso e carnoso, molto robusto di color verde nei germogli e rosso nelle parti più vecchie, può arrivare a 60 cm di lunghezza, le foglie di forma ellittica appuntita, le temperature superiori ai 26° si stimola la produzione di piccoli fiori di color rosa pallido, poco appariscenti nascono al centro del nodo tra le foglie ', 'AMMANIA-GRACILIS.jpg'),
(6, 'Ammania Senegalensis', 'Lythraceae', 'Africa', 'Alta', '5.5/8', '0/6', 'Veloce', 'Talea', 'Sfondo/Laterale', 'Difficile', 'La Ammania senegalensis è una pianta palustre a fusto eretto molto decorativa per l’acquario.\r\nLe foglie sono lanceolate lunghe 2-6 cm e larghe 0,8-1,3 cm.\r\nI margini fogliari (a differenza della A.gracilis,)tendono a inarcarsi verso il basso\r\nil colore varia dal ‘color cognac’ ad un rosso intenso se riceve una intensa illuminazione.\r\nSe la pianta riceve poca illuminazione le foglie sui nodi più bassi si anneriscono.\r\nPer una buona crescita è importante un substrato ricco di sostanze nutritive .\r\nPuò crescere anche  emersa e con alte temperature anche fiorire. ', 'ammania-senegalensis.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
