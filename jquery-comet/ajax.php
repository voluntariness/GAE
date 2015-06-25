<?php
$count = 5;
for ($i = 1; $i <= $count; $i++) {
    echo "{$i} / {$count}";
    ob_flush();
    flush();
    sleep(1);
}
echo 'success';