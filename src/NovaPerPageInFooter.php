<?php

namespace Andonovnpfizer\NovaPerPageInFooter;

use Laravel\Nova\ResourceTool;

class NovaPerPageInFooter extends ResourceTool
{
    /**
     * Get the displayable name of the resource tool.
     *
     * @return string
     */
    public function name()
    {
        return 'NovaPerPageInFooter';
    }

    /**
     * Get the component name for the resource tool.
     *
     * @return string
     */
    public function component()
    {
        return 'nova-per-page-in-footer';
    }
}
