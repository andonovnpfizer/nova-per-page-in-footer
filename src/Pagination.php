<?php

namespace NewtonConsole\Pagination;

use Laravel\Nova\ResourceTool;

class Pagination extends ResourceTool
{
    /**
     * Get the displayable name of the resource tool.
     *
     * @return string
     */
    public function name()
    {
        return 'Pagination';
    }

    /**
     * Get the component name for the resource tool.
     *
     * @return string
     */
    public function component()
    {
        return 'pagination';
    }
}
