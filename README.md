#ALGS4 examples on java, php, js

## To start git clone this project and add data files to the root from - http://algs4.cs.princeton.edu/code/algs4-data.zip

## Building

- Java: ``` javac -d java/out -sourcepath java/src java/src/Main.java ```
- PHP: -
- js: ``` npm run build ```

## Sorting examples:

##- Selection 

``` 
git checkout selection
java -classpath java/out Main < algs4-data/tinyT.txt
php php/index.php algs4-data/tinyT.txt
node js/out/index.js algs4-data/tinyT.txt 
```

**Benchmark for 100,000 nums:**

    - java ~30sec
    - js ~15sec
    - php ~980sec


##- Insertion

``` 
git checkout insertion
java -classpath java/out Main < algs4-data/tinyT.txt
php php/index.php algs4-data/tinyT.txt
node js/out/index.js algs4-data/tinyT.txt 
```

**Benchmark for 100,000 nums:**

    - java ~32.7sec
    - js ~7.6sec
    - php ~939sec


##- Shell

``` 
git checkout shell
java -classpath java/out Main < algs4-data/tinyT.txt
php php/index.php algs4-data/tinyT.txt
node js/out/index.js algs4-data/tinyT.txt 
```

**Benchmark for 100,000 nums:**

    - java ~0.4sec
    - js ~0.7sec
    - php ~xzsec


##- Merge

``` 
git checkout merge
java -classpath java/out Main < algs4-data/tinyT.txt
php php/index.php algs4-data/tinyT.txt
node js/out/index.js algs4-data/tinyT.txt 
```

**Benchmark for 100,000 nums:**

    - java ~0.36sec
    - js ~62sec
    - php ~3.6sec


##- MergeBU

``` 
git checkout mergeBU
java -classpath java/out Main < algs4-data/tinyT.txt
php php/index.php algs4-data/tinyT.txt
node js/out/index.js algs4-data/tinyT.txt 
```

**Benchmark for 100,000 nums:**

    - java ~0.35sec
    - js ~1.1sec
    - php ~3.3sec

