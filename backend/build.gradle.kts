plugins {
    `java-library`
    alias(libs.plugins.dotenv)
}

allprojects {
    repositories {
        mavenCentral()
    }
}
