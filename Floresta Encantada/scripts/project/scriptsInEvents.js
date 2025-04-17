

const scriptsInEvents = {

	async ["FolhaDeEventosFase0.2_Event9_Act5"](runtime, localVars)
	{
		runtime.goToLayout()
	},

	async ["FolhaDeEventosFase0.2_Event16_Act1"](runtime, localVars)
	{
		runtime.goToLayout("Final");
	},

	async ["FolhaDeEventosFase0.1_Event7_Act1"](runtime, localVars)
	{
		runtime.goToLayout("Fase0.2");
		
	},

	async ["FolhaDeEventosFase0.1_Event8_Act3"](runtime, localVars)
	{
		runtime.goToLayout("Game over");
	},

	async FolhaDeEventosFinal_Event5_Act1(runtime, localVars)
	{
		runtime.goToLayout("Parabens")
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
