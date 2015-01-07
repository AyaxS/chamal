<!DOCTYPE html>
<html>
    <head>
        <?php echo $this->Html->charset(); ?>
        <?php
        echo $this->Html->meta('icon');

        //echo $this->Html->css('cake.generic');
        echo $this->Html->css('chamal');

        echo $this->Html->script('jquery.min');

        echo $this->fetch('meta');
        echo $this->fetch('css');
        echo $this->fetch('script');
        ?>
    </head>
    <body>
        <?php
        echo $this->fetch('content');
        echo $this->element('sql_dump');
        ?>
    </body>
</html>
