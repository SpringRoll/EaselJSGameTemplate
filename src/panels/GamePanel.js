(function()
{
	//Import classes
	var BasePanel = include('springroll.easeljs.BasePanel'),
		Container = include('createjs.Container');

	/**
	 * Panel contains all of the visual elements for the Game state
	 * @class _namespace_.GamePanel
	 * @extends springroll.easeljs.BasePanel
	 */
	var GamePanel = function()
	{
		BasePanel.call(this);
	};

	//Super prototype
	var s = BasePanel.prototype;

	//Extend the base panel
	var p = extend(GamePanel, BasePanel);

	/**
	 * Setup the state, this happens on each state entering
	 */
	p.setup = function()
	{
		/**
		 * The constructed game stage
		 * @property {createjs.Container} skin
		 */
		this.skin = new lib.Game();
		this.addChild(this.skin);
	};

	/**
	 * Un-setup the panel when exiting the state
	 */
	p.teardown = function()
	{
		s.teardown.call(this);
		this.skin = null;
	};

	//Assign to namespace
	namespace('_namespace_').GamePanel = GamePanel;
}());