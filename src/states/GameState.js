(function()
{
	//Import classes
	var BaseState = include('springroll.easeljs.BaseState'),
		GamePanel = include('_namespace_.GamePanel');

	/**
	 * The logic for the title state
	 * @class _namespace_.TitleState
	 * @extends springroll.easeljs.BaseState
	 */
	var GameState = function(options)
	{
		BaseState.call(this, new GamePanel(), options);
	};

	//Extend the base state
	var p = extend(GameState, BaseState);

	/**
	 * After assets are loaded and state is fully entered
	 * @method  enterDone
	 */
	p.enterDone = function()
	{
	};

	/**
	 * When the state starts to exit, before transition
	 * @method  exitStart
	 */
	p.exitStart = function()
	{
		
	};

	//Assign to namespace
	namespace('_namespace_').GameState = GameState;
}());