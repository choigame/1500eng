let WORD_FAMILY_DATA = [
	"itching (n)| itchy (a)",
	"invent (v)| inventor (n) | invention (n)",
	"investigation (n)| investigate (v) | investigative (a) | investigatory (a)",
	"approach (n,v)| approachable (a)",
	"define (v)| redefine (v)",
	"motivational (a)| motivation (n) | motivate (v)",
	"construction (n)| reconstruction (n)",
	"secure (a)| security (n)",
	"competition (n)| compete (v) | competitor (n)",
	"flexibility (n)| flexible (v)",
	"reservation (n)| reserve (v)",
	"conservation (n)| conserve (v)",
	"defense (n)| defender (n)| defend (n)",
	"environment (n)| environmental (a)| environmentally (adv)",
	"erosion (n)| erode (v)",
	"extent (n)| extend (v)",
	"extensive (a)| extensively (adv)",
	"pollution (n)| pollutant (n)| pollute (v)",
	"stability (n)| stabilize (v)| stable (a)",
	"evolution (n)| evolve (v)| evolutionary (a)",
	"fascination (n)| fascinate (v)| fascinating (a)",
	"migration (n)| migrant (n)| migrate (v)| migratory (a)",
	"navigation (n)| navigator (n)| navigate (v)| navigational (a)",
	"observation (n)| observer (n)| observe (v)| observant (a)",
	"adaptation (n)| adapt (v)| adaptable (a)",
	"diversity (n)| diversification (n)| diversify (v)| diverse (a)",
	"extreme (n)| extreme (a)| extremely (adv)",
	"resilience (n)| resilient (a)| resiliently (adv)",
	"stress (n,v)| stressor (n)| stressful (a)",
	"violence (n)| violent (a)| violently (adv)",
	"complication (n)| complicate (v)| complicated (a)",
	"coordination (n)| coordinate (v)| coordinated (a)",
	"demonstration (n)| demonstrate (v)| demonstrative (a)",
	"performance (n)| performer (n)| perform (v)",
	"tolerance (n)| tolerant (a)| tolerate (v)",
	"vision (n)| visual (a)| visually (adv)",
	"development (n)| developer (n)| develop (v)",
	"entertainment (n)| entertainer (n)| entertain (v)| entertaining (a)",
	"permanence (n)| permanent (a)| permanently (adv)",
	"popularity (n)| popularize (v)| popular (a) | popularly (adv)",
	"survival (n)| survivor (n)| popular (a)",
	"trainer (n)| train (v)| trained (a)",
	"authority (n)| authorize (v)| authoritative (a)| authoritatively (adv)",
	"deliberation (n)| deliberate (v)| deliberate (a)| deliberately (adv)",
	"emotion (n)| emotionally (adv)| emotional (a)",
	"industry (n)| industrial (a) | industrious (a)| industriously (adv)",
	"intellect (n)| intellectual (n,a) | intellectually (adv)",
	"reluctance (n)| reluctant (a)| reluctantly (adv)",
	"efficiency (n)| efficiency (a)| efficiently (adv)",
	"generator (n)| generation (n)| generate (v)",
	"illuminator (n)| illumination (n)| illuminate (v)",
	"innovation (n)| innovator (n)| innovative (a)",
	"intensity (n)| intensify (v)| intense (a)| intensely (adv)",
	"reflector (n)| reflection (n)| reflect (v)| reflective (a)",
	"architect (n)| architecture (n)| architectural (a)| architecturally (adv)",
	"decoration (n)| decorator (n)| decorate (v)| decorative (a)",
	"destruction (n)| destroy (v)| destructive (a)",
	"disruption (n)| disrupt (v)| disruptive (a)",
	"expansion (n)| expand (v)| expandable (a)",
	"operation (n)| operator (n)| operate (v)",
	"appeal (n,v) | appealing (a)",
	"class (n)| classification (n)| classify (v)",
	"commuter (n)| commute (n,v)",
	"consumer (n)| consumption (n) | consumer (v)",
	"mark (n)| mark (v) | marked (a) | markedly (adv)",
	"money (n)| monetary (a) | monetarily (adv)",
	"agriculture (n)| agricultural (a) | agriculturally (adv)",// unit 4
	"creator (n)| creation (n) | create (v) | creative (a) | creatively (adv)",
	"excavation (n)| excavator (n) | excavate (v)",
	"literacy (n)| illiteracy (n) | literate (a) | illiterate (a)",
	"mythology (n)| myth (n) | mythological (a)",
	"specialty (n)| specialization (n) | specialize (v) | specialized (a)",
]









function getWordFamily(word)
{
	word = word.toLowerCase()
	var arr = []
	for (var i = 0; i < WORD_FAMILY_DATA.length; i++) 
	{
		let words = WORD_FAMILY_DATA[i];
		if (IsExisted(words, word) != -1)
		{
			arr = words.split('|')
			arr = arr.filter(e => e.indexOf(word) == -1)
			break
		}
	}
	var rr = arr.join()
	// console.log(rr)
	if (rr.length > 0) rr = ' [f. ' + rr + ']'
	return rr
}

// ielts_syn
function IsExisted(seq, word)
{
	var seq = seq.replace(/\(.*\)/,'').replace(/\/.*\//, '').trim()
	let seqs = seq.split('|')
	return seqs.findIndex(ele => ele.trim() == word)
}

// getWordFamily('rate')