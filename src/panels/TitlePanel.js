(function()
{
    //Import classes
    var BasePanel = include('springroll.easeljs.BasePanel'),
        Bitmap = include('createjs.Bitmap'),
        SoundButton = include('springroll.easeljs.SoundButton');

    /**
     * Panel contains all of the visual elements for the title state
     * @class _namespace_.TitlePanel
     * @extends springroll.easeljs.BasePanel
     */
    var TitlePanel = function()
    {
        BasePanel.call(this);
    };

    //Super prototype
    var s = BasePanel.prototype;

    //Extend the base panel
    var p = extend(TitlePanel, BasePanel);

    /**
     * Setup the state, this happens on each state entering
     */
    p.setup = function()
    {
        this.background = new Bitmap(images.TitleBackground);
        this.addChildAt(this.background, 0);

        this.playButton = new SoundButton(images.PlayButton);
        this.addChild(this.playButton);
    };

    /**
     * Un-setup the panel when exiting the state
     */
    p.teardown = function()
    {
        s.teardown.call(this);
        this.background = null;
        this.playButton = null;
    };

    //Assign to namespace
    namespace('_namespace_').TitlePanel = TitlePanel;
}());