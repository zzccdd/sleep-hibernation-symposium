const speakers = {
  "takeshi-sakurai": {
    name: "Takeshi Sakurai",
    affiliation: "University of Tsukuba, International Institute for Integrative Sleep Medicine (WPI-IIIS)",
    talk: "Neural Control of Hibernation-like Hypometabolism in Non-hibernating Mammals",
    image: "assets/takeshi-sakurai.jpeg",
    imageClass: "portrait-takeshi",
    website: {
      label: "Sakurai Lab",
      url: "https://sakurai-lab.com/english/"
    },
    bio: "Dr. Takeshi Sakurai is a professor at the University of Tsukuba and the International Institute for Integrative Sleep Medicine (WPI-IIIS). His research focuses on the neural mechanisms regulating sleep, wakefulness, metabolism, and hibernation-like states. His laboratory has identified hypothalamic Q neurons as a key population capable of inducing a reversible hypothermic and hypometabolic state in mice, providing new insights into the neural control of hibernation and its potential biomedical applications.",
    abstract: "Q neuron-induced hypothermic/hypometabolic state (QIH) is a reversible hibernation-like state characterized by profound reductions in body temperature and energy expenditure in non-hibernating mammals. However, whether the brain during QIH represents an extreme form of sleep, a generalized suppression of neuronal activity, or a distinct mode of neural organization remains unclear. In this talk, I will discuss our recent findings on brain activity during QIH, focusing on cortical dynamics, sleep-state organization, and circadian timekeeping. By combining optogenetic induction of QIH with chronic high-density recordings from the medial prefrontal cortex, we found that QIH is not a homogeneous inactive state, but instead consists of internally structured substates with spectral and spiking properties distinct from wakefulness, NREM sleep, and REM sleep. In particular, cortical activity during QIH lacks the synchronized slow oscillations typical of NREM sleep, and REM-like episodes are absent, followed by rebound of REM sleep after recovery. At the same time, neuronal activity in the suprachiasmatic nucleus retains a low-amplitude circadian oscillation despite markedly reduced brain temperature. These findings suggest that QIH is neither deep sleep nor neuronal shutdown, but a unique brain state in which cortical networks are reorganized while selected regulatory functions remain operational.",
    publications: [
      {
        title: "Functional Roles of Gastrin-Releasing Peptide-Producing Neurons in the Suprachiasmatic Nucleus: Insights into Photic Entrainment and Circadian Regulation",
        venue: "Journal of Neuroscience, 2025",
        url: "https://pubmed.ncbi.nlm.nih.gov/40404352/"
      },
      {
        title: "Sequential transitions of male sexual behaviors driven by dual acetylcholine-dopamine dynamics",
        venue: "Neuron, 2025",
        url: "https://pubmed.ncbi.nlm.nih.gov/40112814/"
      },
      {
        title: "Parameterized resetting model captures dose-dependent entrainment of the mouse circadian clock",
        venue: "Nature Communications, 2025",
        url: "https://pubmed.ncbi.nlm.nih.gov/39915501/"
      },
      {
        title: "Utility of complexity analysis in electroencephalography and electromyography for automated classification of sleep-wake states in mice",
        venue: "Scientific Reports, 2025",
        url: "https://pubmed.ncbi.nlm.nih.gov/39856071/"
      }
    ]
  },
  "hiromasa-funato": {
    name: "Hiromasa Funato",
    affiliation: "Toho University, Department of Anatomy; University of Tsukuba, WPI-IIIS",
    talk: "Many roads to sleep: touch, kinases, and midbrain circuits",
    image: "assets/hiromasa-funato.jpeg",
    imageClass: "",
    website: {
      label: "Sleepy Mouse",
      url: "https://sleepymouse.jp/"
    },
    bio: "Dr. Funato is Professor at the International Institute for Integrative Sleep Medicine (WPI-IIIS), University of Tsukuba, and the Department of Anatomy, Toho University. His group identified the sleep-regulating kinase SIK3 through forward genetics, established phosphorylation-based signaling as a core mechanism of sleep homeostasis, and has uncovered neural circuits linking sleep to metabolism and innate behaviors. He is a recipient of the Baelz Prize.",
    abstract: [
      "Sleep is shaped by diverse biological processes, ranging from sensory input and intracellular signaling to genetically defined neural circuits. A gentle maternal touch can calm infants and promote sleep, suggesting that somatosensory signals are able to engage sleep-promoting mechanisms. At the molecular level, sleep need is also regulated by phosphorylation-dependent pathways, including those involving the kinase SIK3. These observations raise a broader question: how are local molecular and cellular mechanisms integrated to organize global brain states? In this talk, I will discuss our forward genetic approaches to identifying molecules that regulate sleep architecture in mice. Among the genes identified through screening, NALCN emerged as a key regulator of sleep-state organization. NALCN encodes a sodium leak channel that contributes to neuronal excitability, and independent Nalcn mutant alleles showed distinct alterations in sleep properties. These findings indicate that ion conductance mechanisms can influence not only the quantity of sleep but also the stability and internal structure of sleep states. Because pathogenic variants in human NALCN cause severe neurodevelopmental disorders, this work also suggests a potential link between fundamental mechanisms of sleep regulation and normal brain development.",
      "We further examined the anatomical substrate of this phenotype and found that cortical NALCN activity contributes, at least in part, to healthy expression of sleep architecture. Together with additional channel-related genes identified in our screen, these results support the idea that ion channels represent a major molecular class governing sleep regulation. More broadly, our studies illustrate how unbiased genetics can connect sensory experience, kinase signaling, neuronal excitability, and circuit mechanisms in the regulation of sleep."
    ],
    publications: [
      {
        title: "Partial activation of salt-inducible kinase 3 delays the onset of wakefulness and alleviates hypersomnia due to the lack of protein kinase A-phosphorylation site",
        venue: "Sleep, 2025",
        url: "https://doi.org/10.1093/sleep/zsae279"
      },
      {
        title: "Neuronal subtype-specific transcriptomic changes in the cerebral neocortex associated with sleep pressure",
        venue: "Neuroscience Research, 2024",
        url: "https://pubmed.ncbi.nlm.nih.gov/38537682/"
      },
      {
        title: "Prefrontal synaptic regulation of homeostatic sleep pressure revealed through synaptic chemogenetics",
        venue: "Science, 2024",
        url: "https://pubmed.ncbi.nlm.nih.gov/39325885/"
      },
      {
        title: "Association between idiopathic hypersomnia and a genetic variant in the PER3 gene",
        venue: "Journal of Sleep Research, 2024",
        url: "https://doi.org/10.1111/jsr.14146"
      }
    ]
  },
  "wei-li": {
    name: "Wei Li",
    affiliation: "Shanghai Jiao Tong University School of Medicine, SANS Institute for Neuroscience and Vision Research",
    talk: "Seeing in the cold - hibernation biology and its applications",
    image: "assets/wei-li.jpeg",
    imageClass: "",
    website: {
      label: "Wei Li Lab / Profile",
      url: "https://www.shsmu.edu.cn/sinvr/kxyj1/yjdw/lw.htm"
    },
    bio: "Professor Wei Li is a Senior SANS Scholar, and the Director of SANS Institute for Neuroscience and Vision Research at Shanghai Jiao Tong University School of Medicine. Previously, he was a senior investigator (with tenure) at the U.S. National Eye Institute (NEI) of the National Institutes of Health, where he directed the Retinal Neurobiology Section, and he was also an Adjunct Professor in the Neuroscience and Cognitive Science program at the University of Maryland. Professor Li studies retinal neural synapses, circuits and their roles in visual signal processing, as well as retinal development, metabolism, and related diseases. His laboratory also leverages the unique hibernation traits of ground squirrels to systematically reveal adaptive changes in the visual system.",
    abstract: "Leveraging the unique attributes of the ground squirrel, particularly its winter hibernation habits, allows us to explore remarkable aspects of its biology and the adaptations induced by hibernation. In this seminar, I will discuss how the visual system undergoes changes during hibernation and examine the adaptive processes that occur within the ground squirrel's visual system during this period. Our research into these mechanisms aims not only to address fundamental questions about this fascinating biological phenomenon but also to uncover potential therapeutic strategies for treating injuries and diseases of the visual system, conditions often linked with metabolic stress.",
    publications: [
      {
        title: "Yang H, Ping X, Zhou J, Ailifeire H, Nadal-Nicolas F, Miyagishima KJ, Bao J, Yuxin Huang Y, Cui Y, Wang S, Yao K, Wei Li*, Xingchao Shentu* (2024) Reversible cold-induced lens opacity in a hibernator reveals a molecular target for treating cataracts.",
        venue: "Journal of Clinical Investigation 134(18):e169666",
        url: "https://www.jci.org/articles/view/169666"
      },
      {
        title: "Zhang X, Ge L, Jin G, Liu Y, Chen L, Yu Q, Dong T, Miyagishima KJ, Shen J, Lv G, Xu Y, Yang Q, Ye L, Yi S, Li H, Zhang Q, Chen G, Liu W*, Yang Y*, Li W*, Ou J* (2024) Cold induced FOXO1 nuclear transport aids cold survival and tissue storage.",
        venue: "Nature Communications 15(2859)",
        url: "https://www.nature.com/articles/s41467-024-47095-w"
      },
      {
        title: "Ball JM, Chen S, Li W (2022) Mitochondria in cone photoreceptors act as microlenses to enhance photon delivery and confer directional sensitivity to light.",
        venue: "Science Advances 8(9):2070",
        url: "https://pubmed.ncbi.nlm.nih.gov/35235359/"
      },
      {
        title: "Ou J, Ball JM, Luan Y, Zhao T, Miyajishima J, Xu Y, Chen J, Merriman D, Xie Z, Mallon BS, Li W (2018) iPSCs from a hibernator provide a platform for studying cold adaptation and its potential medical applications.",
        venue: "Cell 173(4):851-863",
        url: "https://pubmed.ncbi.nlm.nih.gov/29576452/"
      }
    ]
  },
  "anita-luthi": {
    name: "Anita Lüthi",
    affiliation: "University of Lausanne, Department of Fundamental Neurosciences",
    talk: "Noradrenergic signaling in NREM sleep and in a vagal stimulation-induced NREM sleep-like state",
    image: "assets/anita-luthi.png",
    imageClass: "portrait-anita",
    website: {
      label: "UNIL laboratory profile",
      url: "https://dnf-unil.ch/group/gaining-insight-into-the-roles-of-sleep-for-neuronal-function"
    },
    bio: "Anita Lüthi is an Associate Professor at the Department of Fundamental Neurosciences at the University of Lausanne, Switzerland. Her research focuses on the interplay between sleep rhythms and brain functions, exploring the circuit mechanisms that regulate sleep globally and locally. Her laboratory has pioneered work identifying the locus coeruleus as an infraslow gatekeeper for sleep spindles and the NREMS-REMS cycle, providing critical insights into the fundamental balance between sleep continuity and fragility, as well as arousal processes in human sleep disorders.",
    abstract: [
      "The transition from wake to sleep involves an autonomic and thermoregulatory transformation that is vital for brain-body restoration. The vagus nerve carries information from the body's internal organs to the brain and contributes to autonomic regulation during sleep, but the physiological parameter space that it regulates remains poorly understood. We addressed this question by activating vagal sensory neurons in mice while simultaneously measuring sleep-wake states through EEG/EMG, heart rate, cortical and brain temperature. We also monitored the activity of the wake-promoting locus coeruleus and associated noradrenergic signaling, which is integral for sleep’s natural progression in non-rapid-eye-movement (NREM)-REM sleep cycles.",
      "Activating vagal sensory neurons induced a state that resembled non-REM sleep, with dominant slow-wave brain activity and a marked reduction in REM sleep. At the same time, body and brain temperature decreased, while activity of the locus coeruleus unexpectedly increased to levels higher than the ones found in wakefulness. Restoring body temperature accelerated the return to normal sleep cycles, suggesting that cooling underlay the polysomnographic and neuronal activity correlates of this NREM sleep-like state.",
      "These findings show that vagal sensory signals can drive a NREM sleep-like state accompanied by coordinated changes in body physiology, while simultaneously maintaining activity in a major arousal system. This reveals an unexpected combination of sleep- and wake-associated features and suggests that vagal pathways may help regulate transitions between sleep and energy-conserving states such as torpor."
    ],
    publications: [
      {
        title: "Infraslow noradrenergic locus coeruleus activity fluctuations are gatekeepers of the NREM-REM sleep cycle",
        venue: "Nature Neuroscience, 2025",
        url: "https://pubmed.ncbi.nlm.nih.gov/39587312/"
      },
      {
        title: "Noradrenergic circuit control of non-REM sleep substates",
        venue: "Current Biology, 2021",
        url: "https://pubmed.ncbi.nlm.nih.gov/34648731/"
      },
      {
        title: "Cortico-autonomic local arousals and heightened somatosensory arousability during NREMS of mice in neuropathic pain",
        venue: "eLife, 2021",
        url: "https://pubmed.ncbi.nlm.nih.gov/34227936/"
      },
      {
        title: "A thalamic reticular circuit for head direction cell tuning and spatial navigation",
        venue: "Cell Reports, 2020",
        url: "https://pubmed.ncbi.nlm.nih.gov/32521272/"
      }
    ]
  },
  "vladyslav-vyazovskiy": {
    abstract: "The conventional view that waking and sleep are the predominant states in mammals, generated by subcortical circuitry, is far from complete. Furthermore, sleep and wakefulness are typically thought of as discrete global states, yet this view is increasingly outdated. Sleep-like neuronal activity can occur locally during waking, brief arousals are an integral part of the sleep process, and a broad range of pharmacological or transgenic manipulations can generate states that cannot be easily described using conventional terminology. I will discuss how such observations challenge categorical definitions of brain states and can help identify the mechanisms that generate them. I will start by presenting new data testing the emerging concept of cortical control of sleep, suggesting an important role for the neocortex. Next, I will discuss our recent experiments with the psychedelic 5-MeO-DMT, which demonstrate a striking dissociation between behavioural and cortical state: freely moving mice remain overtly awake while expressing prominent cortical slow waves. 5-MeO-DMT also suppresses REM sleep, followed by a delayed rebound, and alters the homeostatic response to sleep deprivation, suggesting that psychedelic action may involve sleep-regulatory mechanisms. In turn, dexmedetomidine, considered a potent sedative drug, surprisingly induces a deeply hypometabolic state with preserved locomotor activity and arousal. Likewise, while torpor is often viewed as a quiescent state, our data suggest that animals can move and respond to environmental stimuli even during profound hypometabolism. Finally, I will discuss the relationship between brain states and specific brain oscillations and their regulation. Sleep spindles, an oscillation characteristic of sleep, correlate with reduced responsiveness to auditory stimulation, while being exquisitely sensitive to sensory input and showing homeostatic regulation. Together, these findings provide a more nuanced view of how vigilance states are defined, their dynamics and regulation, and pave the way towards a new and more flexible taxonomy of states in neuroscience.",
    name: "Vladyslav Vyazovskiy",
    affiliation: "University of Oxford, Department of Physiology, Anatomy and Genetics",
    talk: "Sleep, wake, torpor and other states: from definition to mechanisms",
    image: "assets/vladyslav-vyazovskiy.jpeg",
    imageClass: "",
    website: {
      label: "Vyazovskiy Group",
      url: "https://www.dpag.ox.ac.uk/research/vyazovskiy-group"
    },
    bio: "Vladyslav Vyazovskiy obtained his PhD from the University of Zurich in 2004 and is currently a Professor of Sleep Physiology at the University of Oxford. He is a Tutorial Fellow in Medicine at Hertford College and a member of the Sir Jules Thorn Sleep and Circadian Neuroscience Institute and the Kavli Institute for Nanoscience Discovery. He also serves as Vice-President of the European Sleep Research Society and Director of Graduate Studies at DPAG. His research focuses on the neurobiology of sleep and torpor, and the mechanisms of brain activity across behavioural states.",
    publications: [
      {
        title: "Human lesions and animal studies link the claustrum to perception, salience, sleep and pain",
        venue: "Brain, 2022",
        url: "https://pubmed.ncbi.nlm.nih.gov/35348621/"
      },
      {
        title: "Psilocin acutely alters sleep-wake architecture and cortical brain activity in laboratory mice",
        venue: "Translational Psychiatry, 2022",
        url: "https://pubmed.ncbi.nlm.nih.gov/35197453/"
      },
      {
        title: "The hypothalamic link between arousal and sleep homeostasis in mice",
        venue: "Proceedings of the National Academy of Sciences, 2021",
        url: "https://pubmed.ncbi.nlm.nih.gov/34903646/"
      },
      {
        title: "A role for the cortex in sleep-wake regulation",
        venue: "Nature Neuroscience, 2021",
        url: "https://pubmed.ncbi.nlm.nih.gov/34341585/"
      }
    ]
  },
  "graham-diering": {
    name: "Graham Diering",
    affiliation: "University of North Carolina at Chapel Hill, Department of Cell Biology and Physiology",
    talk: "Synapse homeostasis: a cellular basis for the accumulation and resolution of sleep need",
    image: "assets/graham-diering.jpeg",
    imageClass: "",
    website: {
      label: "Diering Lab",
      url: "https://dieringlab.web.unc.edu/"
    },
    bio: "Dr. Diering is an Associate Professor in the Dept. of Cell Biology and Physiology at the University of North Carolina at Chapel Hill (USA). He received doctoral training in Biochemistry from the University of British Columbia (Vancouver, Canada) and postdoctoral training in Neuroscience from Johns Hopkins University (Baltimore, USA). The Diering lab is focused on understanding the biochemical and cellular basis for the accumulation and resolution of sleep need, and in understanding how sleep disruption contributes to neuropsychiatric conditions across the lifespan, with a specific focus on Autism Spectrum and Alzheimer's Disease. The vision of the lab is to use biological insights into sleep's function to develop next generation sleep-medicine that works by enhancing the restorative benefits of sleep, rather than acting as a sedative.",
    abstract: "Daily sleep patterns are controlled by poorly understood interaction between the circadian rhythm (CR) and homeostatic sleep drive. Whether sleep/CR systems converge at the cellular level remains unknown. The CR is a cellular phenomenon. Emerging evidence indicates sleep need likewise has a cellular basis, localized to neuronal synapses. Indeed, efforts to understand the genetic basis of sleep need identified Homer1a, a regulator of synapse homeostasis. To develop further insight into daily sleep patterns, we conducted unbiased quantitative trait loci (QTL) mapping using diverse mice from the Collaborative Cross. 19 metrics of sleep/CR mapped to a QTL implicating a coordinated glutamatergic signaling network containing GRM5, a postsynaptic glutamate receptor and binding partner of Homer1a, and GCPII, a regulator of glutamate receptor GRM3. Our findings support a model in which synapses act as a cellular site for integration of circadian and sleep-need signals to regulate daily sleep patterns.",
    publications: [
      {
        title: "Developing forebrain synapses are uniquely vulnerable to sleep loss",
        venue: "Proceedings of the National Academy of Sciences, 2024",
        url: "https://pubmed.ncbi.nlm.nih.gov/39441640/"
      },
      {
        title: "Sleep now little one, remember why when you grow up",
        venue: "Sleep, 2024",
        url: "https://pubmed.ncbi.nlm.nih.gov/39140481/"
      },
      {
        title: "Sleep Disruption Precedes Forebrain Synaptic Tau Burden and Contributes to Cognitive Decline in a Sex-Dependent Manner in the P301S Tau Transgenic Mouse Model",
        venue: "eNeuro, 2024",
        url: "https://dieringlab.web.unc.edu/publications/"
      },
      {
        title: "Evaluating Fatty Acid Amide Hydrolase as a Suitable Target for Sleep Promotion in a Transgenic TauP301S Mouse Model of Neurodegeneration",
        venue: "Pharmaceuticals, 2024",
        url: "https://dieringlab.web.unc.edu/publications/"
      }
    ]
  },
  "sinisa-hrvatin": {
    name: "Siniša Hrvatin",
    role: "Keynote Speaker",
    affiliation: "MIT, Department of Biology; Whitehead Institute for Biomedical Research",
    talk: "Preoptic neurons that control entry into hibernation",
    image: "assets/sinisa-hrvatin-updated.jpg",
    imageClass: "portrait-sinisa",
    website: {
      label: "Hrvatin Lab",
      url: "https://hrvatinlab.wi.mit.edu/"
    },
    bio: "Dr. Siniša Hrvatin grew up in Croatia and earned his Baccalaureate and Ph.D. from Harvard University. In graduate school, in parallel with his research, he started ReadCube/Papers, a software company that provides access to scientific literature and reference management tools. Dr. Hrvatin completed his research training as a postdoc at Harvard Medical School. Dr. Siniša Hrvatin is now an Assistant Professor of Biology at MIT, a Core Member of the Whitehead Institute, and an HHMI Freeman Hrabowski Scholar. His research explores biological states of stasis, including mammalian torpor and hibernation, aiming to understand how animals and cells achieve profound, reversible reductions in metabolism and temperature. His group studies neural control of daily torpor and hibernation in rodents and low-temperature resilience across organisms, including tardigrades, with an eye toward applications in medicine. For his research Dr. Hrvatin received the NIH New Innovator Award and was named a Pew Biomedical Scholar, a Searle Scholar, and a McKnight Scholar.",
    abstract: "Evolution of seasonal hibernation has enabled mammals to survive harsh conditions by entering a state of prolonged hypometabolism and hypothermia with body temperatures as low as 0-4°C. Despite decades of physiological studies, the genetic tools to study hibernation have remained limited and the mechanisms that induce hibernation entry are still unknown. Focusing on the brain, we map state-dependent neuronal activity across the hibernation cycle in Syrian hamsters and identify the hypothalamic anterior preoptic area (aPOA) as a key regulator of hibernation entry. Single-nucleus RNA and chromatin profiling provided a map of neuronal populations present in the hamster POA and enabled the discovery and design of an enhancer AAV that selectively targets hibernation-associated aPOA subpopulations. Using this genetic approach, we show that Samd3-positive aPOA glutamatergic neurons are necessary for entry into hibernation and that their activation is sufficient to induce a prolonged hypothermic state with associated nesting behavior. Together, we identify a key neuronal population that controls entry into hibernation, opening new avenues for investigating and manipulating the metabolic and physiological mechanisms underlying this extreme state of “suspended animation” and its potential applications in aging and disease.",
    publications: [
      {
        title: "Preoptic Neurons that Control Entry into Hibernation",
        venue: "bioRxiv, 2025",
        url: "https://doi.org/10.64898/2025.12.05.692394"
      },
      {
        title: "A torpor-like state in mice slows blood epigenetic aging and prolongs healthspan",
        venue: "Nature Aging, 2025",
        url: "https://doi.org/10.1038/s43587-025-00830-4"
      },
      {
        title: "Multi-species genome-wide CRISPR screens identify conserved suppressors of cold-induced cell death",
        venue: "eLife, 2024",
        url: "https://pubmed.ncbi.nlm.nih.gov/39091747/"
      },
      {
        title: "Cis-regulatory elements driving motor neuron-restricted viral payload expression within the mammalian spinal cord",
        venue: "Proceedings of the National Academy of Sciences, 2024",
        url: "https://pubmed.ncbi.nlm.nih.gov/39282347/"
      }
    ]
  },
  "yoshifumi-yamaguchi": {
    name: "Yoshifumi Yamaguchi",
    affiliation: "Hokkaido University, Institute of Low Temperature Science",
    talk: "A genetic clue to the regulation of mammalian hibernation",
    image: "assets/yoshifumi-yamaguchi-updated.jpg",
    imageClass: "",
    website: {
      label: "Hibernation Research Group",
      url: "https://www2.lowtem.hokudai.ac.jp/hibernation/"
    },
    bio: "Dr. Yoshifumi Yamaguchi is a Professor at the Institute of Low Temperature Science, Hokkaido University, where he leads the Hibernation Research Group. His research aims to elucidate the molecular and physiological mechanisms underlying mammalian hibernation using the Syrian hamster as an experimentally tractable model. His laboratory investigates the seasonal transition from hibernation-incompetent to hibernation-competent states, focusing on systemic adaptations in thermoregulation, lipid metabolism, circadian body temperature rhythms, and gene expression. Through integrated approaches combining molecular biology, whole-animal physiology, next-generation sequencing, and developmental engineering, his group studies how hibernating mammals adapt to profound hypothermia and metabolic suppression. By uncovering these unique adaptive mechanisms, his work seeks to advance the fundamental understanding of hibernation biology and its potential applications in medicine and pharmacology, including insights into tissue protection and resistance to disuse-induced muscle atrophy.",
    abstract: "Hibernation is a survival strategy for seasonal changes in the environment to reduce basal metabolism and thermogenesis, thereby exhibiting torpor, a very low body temperature state outside the homeothermic range of the animal. Such heterothermic features are observed in at least 10 % of species across mammalian clades, and the evolutionary origin of heterothermy remains a matter of debate. To address the mechanisms and origins of heterothermy and hibernation, it is crucial to identify the genes necessary for these traits. However, little is known about the genetic regulation of hibernation, as addressing the causal relationship between hibernation and genes is challenging. Through unbiased expression screening, we found that cold resistance observed in the Syrian hamster (Mesocricetus auratus), a mammalian hibernator, is dependent on GPX4, an enzyme essential for cellular defence against lipid peroxidation. We also found that one of the differentially expressed genes during hibernation is crucial for hibernation in this species by generating genome-edited hamsters lacking the gene. Analysis of hibernation patterns using mathematical modeling demonstrated that the mutant hamsters exhibited a shortened period of torpor and an extended period of arousal, suggesting that the gene is involved in the balance between torpor and arousal during hibernation. These results provide genetic evidence for the regulation of hibernation, which could be the basis for understanding the mechanisms and origins of hibernation across distinct mammals.",
    publications: [
      {
        title: "Effect of post-weaning diet on hibernation occurrence in Syrian hamsters",
        venue: "Experimental Animals, 2026",
        url: "https://pubmed.ncbi.nlm.nih.gov/41813164/"
      },
      {
        title: "Tools of Hibernation Measurement and Interpretation (TOHMIN) for quantifying various values from body temperature fluctuation during hibernation",
        venue: "Royal Society Open Science, 2026",
        url: "https://doi.org/10.1098/rsos.251980"
      },
      {
        title: "Cold-induced suppression of myogenesis in skeletal muscle stem cells contributes to delayed muscle regeneration during hibernation",
        venue: "The FASEB Journal, 2025",
        url: "https://pubmed.ncbi.nlm.nih.gov/41324489/"
      },
      {
        title: "Identification of genes supporting cold resistance of mammalian cells: lessons from a hibernator",
        venue: "Cell Death and Disease, 2024",
        url: "https://pubmed.ncbi.nlm.nih.gov/39300059/"
      }
    ]
  },
  "yi-zhong": {
    name: "Yi Zhong",
    affiliation: "Tsinghua University, School of Life Sciences; IDG/McGovern Institute for Brain Research; Tsinghua-Peking Center for Life Sciences",
    talk: "Memory Reactivation Underlies Experience-Dependent Adaptive Regulation of Sleep",
    image: "assets/yi-zhong-updated.jpg",
    imageClass: "portrait-yi",
    website: {
      label: "Tsinghua University profile",
      url: "https://life.tsinghua.edu.cn/lifeen/info/1035/1105.htm"
    },
    bio: "Yi Zhong is a Professor of the School of Life Sciences at Tsinghua University and also a principal investigator of IDG/McGovern Institute for Brain Research at Tsinghua and the Tsinghua-Peking Center for Life Sciences. He has long been engaged in the study of the biological mechanism underlying learning and memory and the pathological mechanism of related diseases. He has published many influential articles in high-impact journals including Nature, Science and Cell, and won the Pew Scholar Award in the Biomedical Sciences and CNS-CST Outstanding Neuroscientist Award. At the early stage of his research, he revealed the biochemical functions of cognitive disease genes associated with the Ras/MAPK signaling pathway and their roles in memory formation. In recent years, he made important contributions to the establishment and development of the neurobiology of active forgetting. He not only made discoveries on the biological mechanisms of forgetting, but also established a link between forgetting mechanisms and human cognitive disorders as well as artificial intelligence. On this basis, he worked to develop a new theory of memory.",
    abstract: "Recent memories are consolidated during sleep via spontaneous reactivation. However, whether and how memory reactivation affects sleep dynamics remains unclear. By tracking and modulating memory activity during sleep, we reveal that negative memory reactivation promoted arousal, whereas positive memory supported sleep stability. This regulation was mediated by the reactivation of experience-specific hippocampus-amygdala engram circuits during sleep. In chronic stress models, negative memory reactivation promoted sleep disturbance, and targeted suppression of memory reactivation restored normal sleep. Our findings establish a memory-dependent sleep regulation in which memory reactivation engages downstream circuits responsive to specific memory content.",
    publications: [
      {
        title: "Social experiences switch states of memory engrams through regulating hippocampal Rac1 activity",
        venue: "Proceedings of the National Academy of Sciences, 2022",
        url: "https://pubmed.ncbi.nlm.nih.gov/35377811/"
      },
      {
        title: "Adult newborn granule cells confer emotional state-dependent adaptability in memory retrieval",
        venue: "Science Advances, 2022",
        url: "https://pubmed.ncbi.nlm.nih.gov/36367932/"
      },
      {
        title: "Interplay between alpha2-chimaerin and Rac1 activity determines dynamic maintenance of long-term memory",
        venue: "Nature Communications, 2019",
        url: "https://pubmed.ncbi.nlm.nih.gov/31757963/"
      },
      {
        title: "Active Protection: Learning-Activated Raf/MAPK Activity Protects Labile Memory from Rac1-Independent Forgetting",
        venue: "Neuron, 2018",
        url: "https://pubmed.ncbi.nlm.nih.gov/29551489/"
      }
    ]
  },
  "wei-shen": {
    name: "Wei Shen",
    affiliation: "ShanghaiTech University, School of Life Science and Technology",
    talk: "Shared Neurocircuitry in Hypothermia and Sleep Control",
    image: "assets/wei-shen.jpg",
    imageClass: "",
    email: "shenwei@shanghaitech.edu.cn",
    bio: "Wei Shen is a Professor and Vice Dean at the School of Life Science and Technology, ShanghaiTech University. He graduated from Johns Hopkins Medical Institution and completed his postdoctoral training at Rockefeller University. His research focuses on neural regulation of metabolism, particularly in areas such as body temperature, feeding, and glucose homeostasis. His work has been published in leading journals including Science, Nature Neuroscience, Neuron, and Cell Metabolism.",
    abstract: "Sleep is a fundamental physiological state that is closely coordinated with multiple homeostatic processes. Compared with wakefulness, sleep is consistently associated with reduced energy expenditure and a decline in core body temperature, suggesting an intimate interaction between the neural mechanisms controlling sleep and thermoregulation. Consistent with this idea, passive body warming, such as taking a warm bath or shower before bedtime, can facilitate sleep onset, in part by promoting subsequent heat dissipation and a decline in core body temperature. We investigated the shared neural mechanisms underlying sleep and body temperature regulation. Our previous work identified TRPC4-expressing neurons in the preoptic area as warm-sensitive neurons that detect increases in brain temperature and drive physiological responses to lower body temperature (Neuron, 2023). Here, we find that these TRPC4-expressing neurons are also critically involved in both hypothermia induction and sleep regulation. These findings reveal a shared neural substrate linking thermoregulation and sleep, providing new insight into how the brain coordinates distinct homeostatic states and suggesting potential neural targets for sleep modulation.",
    publications: []
  },
  "qinghua-liu": {
    name: "Qinghua Liu",
    affiliation: "Tsinghua University, Tsinghua Institute of Multidisciplinary Biomedical Research; National Institute of Biological Sciences, Beijing",
    talk: "Phase separation, synaptic transmission, and sleep amount",
    image: "assets/qinghua-liu-updated.png",
    imageClass: "",
    website: {
      label: "NIBS profile",
      url: "http://www.nibs.ac.cn/yjsjyimgshow.php?cid=5&sid=6&id=1870"
    },
    bio: "Dr. Liu is an Investigator at the National Institute of Biological Sciences (NIBS) and a Professor at Tsinghua University. His research focuses on decoding the core molecular and neuronal mechanisms of sleep homeostasis, torpor, and innate fear. To systematically address these questions, his laboratory developed the adult brain chimeric (ABC) system, an advanced high-throughput somatic genetics platform. Utilizing this innovative approach, his team and collaborators identified the first transcriptional regulatory pathway for sleep. Furthermore, by discovering \"sleep-need index phosphoproteins\" (SNIPPs), his group proposed the protein phosphorylation hypothesis of sleep homeostasis. Ultimately, his research seeks to comprehensively map the intricate neurogenetic networks governing sleep, metabolic dormancy, and fundamental survival behaviors.",
    publications: [
      {
        title: "Transcriptional regulation of daily sleep amount by TCF4-HDAC4-CREB complex in mice",
        venue: "Sleep, 2025",
        url: "https://pubmed.ncbi.nlm.nih.gov/39745887/"
      },
      {
        title: "Calcineurin governs baseline and homeostatic regulations of non-rapid eye movement sleep in mice",
        venue: "Proceedings of the National Academy of Sciences, 2025",
        url: "https://pubmed.ncbi.nlm.nih.gov/39847332/"
      },
      {
        title: "Regulation of sleep amount by CRTC1 via transcription of Crh in mice",
        venue: "Journal of Neuroscience, 2025",
        url: "https://pubmed.ncbi.nlm.nih.gov/39622645/"
      },
      {
        title: "A signaling pathway for transcriptional regulation of sleep amount in mice",
        venue: "Nature, 2022",
        url: "https://pubmed.ncbi.nlm.nih.gov/36477534/"
      }
    ]
  }
};

// Display order, matching the speaker grid on the homepage.
const speakerOrder = [
  "sinisa-hrvatin",
  "anita-luthi",
  "vladyslav-vyazovskiy",
  "takeshi-sakurai",
  "hiromasa-funato",
  "wei-li",
  "graham-diering",
  "yoshifumi-yamaguchi",
  "yi-zhong",
  "wei-shen",
  "qinghua-liu"
];

const params = new URLSearchParams(window.location.search);
const currentId = speakers[params.get("id")] ? params.get("id") : "takeshi-sakurai";
const speaker = speakers[currentId];
const image = document.querySelector("#profile-image");
const website = document.querySelector("#profile-website");
const publicationList = document.querySelector("#profile-publications");
const abstractRoot = document.querySelector("#profile-abstract");

document.title = `${speaker.name} | Sleep and Hibernation`;
document.querySelector("#profile-role").textContent = speaker.role || "Invited Speaker";
document.querySelector("#profile-name").textContent = speaker.name;
document.querySelector("#profile-affiliation").textContent = speaker.affiliation;
document.querySelector("#profile-talk").textContent = speaker.talk;
document.querySelector("#profile-bio").textContent = speaker.bio;

const abstractParagraphs = Array.isArray(speaker.abstract)
  ? speaker.abstract
  : speaker.abstract
    ? [speaker.abstract]
    : [];

if (abstractRoot) {
  if (abstractParagraphs.length) {
    abstractParagraphs.forEach((text) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = text;
      abstractRoot.append(paragraph);
    });
  } else {
    const placeholder = document.createElement("p");
    placeholder.className = "abstract-placeholder";
    placeholder.textContent = "Coming soon.";
    abstractRoot.append(placeholder);
  }
}

image.src = speaker.image;
image.alt = `${speaker.name} portrait`;
image.className = speaker.imageClass;

if (speaker.website?.url) {
  website.href = speaker.website.url;
} else {
  website.hidden = true;
}

const email = document.querySelector("#profile-email");
if (email && speaker.email) {
  email.href = `mailto:${speaker.email}`;
  email.textContent = speaker.email;
  email.hidden = false;
}
if (!speaker.website?.url && !speaker.email) {
  website.closest(".profile-links")?.setAttribute("hidden", "");
}

const publications = speaker.publications || [];
if (!publications.length) {
  publicationList.closest(".profile-publications")?.setAttribute("hidden", "");
}
publications.forEach((publication) => {
  const item = document.createElement("li");
  const link = document.createElement("a");
  const venue = document.createElement("span");

  link.href = publication.url;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.textContent = publication.title;
  venue.textContent = publication.venue;

  item.append(link, venue);
  publicationList.append(item);
});

/* ---------- Previous / Next speaker navigation ---------- */
(function setupPager() {
  const index = speakerOrder.indexOf(currentId);
  if (index === -1) return;

  const total = speakerOrder.length;
  const prevId = speakerOrder[(index - 1 + total) % total];
  const nextId = speakerOrder[(index + 1) % total];

  const wire = (selector, id) => {
    const el = document.querySelector(selector);
    if (!el || !speakers[id]) return;
    el.href = `speaker.html?id=${id}`;
    const nameEl = el.querySelector(".pager-name");
    if (nameEl) nameEl.textContent = speakers[id].name;
  };

  wire("#pager-prev", prevId);
  wire("#pager-next", nextId);
})();
