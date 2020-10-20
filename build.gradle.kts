plugins {
    id("org.jetbrains.kotlin.js") version "1.4.10"
}

group = "org.example"
version = "1.0-SNAPSHOT"

repositories {
    maven("https://kotlin.bintray.com/kotlin-js-wrappers/")
    mavenCentral()
    jcenter()
}

dependencies {
    implementation(kotlin("stdlib-js"))

    //React, React DOM + Wrappers (chapter 3)
    implementation("org.jetbrains:kotlin-react:16.13.1-pre.110-kotlin-1.4.0")
    implementation("org.jetbrains:kotlin-react-dom:16.13.1-pre.110-kotlin-1.4.0")
    implementation("org.jetbrains:kotlin-react-router-dom:5.1.2-pre.124-kotlin-1.4.10")
    implementation(npm("react", "16.13.1"))
    implementation(npm("react-dom", "16.13.1"))
    implementation(npm("react-router-dom", "5.1.2"))

    //Kotlin Styled (chapter 3)
    implementation("org.jetbrains:kotlin-styled:1.0.0-pre.110-kotlin-1.4.0")
    implementation(npm("styled-components", "~5.1.1"))
    implementation(npm("inline-style-prefixer", "~6.0.0"))

    implementation(npm("react-player", "~2.6.0"))
    implementation(npm("react-share", "~4.2.1"))
    implementation(npm("@material-ui/core", "^4.11.0"))
    implementation(npm("@material-ui/icons", "^4.9.1"))
    implementation("com.ccfraser.muirwik:muirwik-components:0.6.0")

    //Coroutines (chapter 8)
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.3.9")
}

kotlin {
    js {
        browser {
            webpackTask {
                cssSupport.enabled = true
                
            }

            runTask {
                cssSupport.enabled = true
            }

            testTask {
                useKarma {
                    useChromeHeadless()
                    webpackConfig.cssSupport.enabled = true
                }
            }
        }
        binaries.executable()
    }
}

tasks.register("webpackStatsFile") {
    description = "Creates a webpack stats file for webpack-bundle-analyzer to use, and shows this in a browser"

    /**
     * Windows and Linux/Mac has different executables for webpack, so this just centralises getting the name
     * of the executable depending on platform. We are just making an assumption that if the path separator is '\' then
     * we are on a windows OS, otherwise a Unix based OS (based on https://docs.oracle.com/javase/tutorial/essential/environment/sysprop.html).
     */
    fun appendCmdExtIfRequired(executableName: String) = executableName + if (File.separatorChar == '\\') ".cmd" else ""

    doLast {
        val createdWebPackFile = rootProject.buildDir.resolve("js/packages/${rootProject.name}-${project.name}/webpack.config.js")
        if (!createdWebPackFile.exists()) {
            throw IllegalStateException("Could not create stats file as can't find webpack config file.")
        } else {
            val outputFile = buildDir.resolve("reports/webpack/webpack-stats.json")
            val workingDirFile = rootProject.buildDir.resolve("js/node_modules/.bin")

            val execResult = exec {
                workingDir = workingDirFile
                standardOutput = outputFile.outputStream()
                commandLine = listOf(appendCmdExtIfRequired("./webpack-cli"), "--config", createdWebPackFile.toString(), "--profile", "--json")
            }
            if (execResult.exitValue == 0) {
                // The output seems to put a %complete before outputting the json, so we stip that from the file
                val filteredLines = outputFile.readLines().filter { !(it.substring(0,
                    org.jetbrains.kotlin.utils.addToStdlib.min(it.length, 5)
                ).contains("%")) }
                outputFile.writeText(filteredLines.joinToString("\n"))
                exec {
                    workingDir = workingDirFile
                    commandLine = listOf(appendCmdExtIfRequired("./webpack-bundle-analyzer"),
                        outputFile.toString(), "-m", "static", "-r", outputFile.resolveSibling("webpack-stats-report.html").toString())
                }
            } else {
                println("webpack-cli stats creation exit value was not zero: ${execResult.exitValue}")
            }
        }
    }
}
