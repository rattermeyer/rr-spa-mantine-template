plugins {
    java
    alias(libs.plugins.springboot)
    alias(libs.plugins.spring.dependency.management)
    alias(libs.plugins.cyclonedx.bom)
    alias(libs.plugins.jooq.plugin)
}

group = "com.example"
version = "0.0.1-SNAPSHOT"

java {
    toolchain {
        languageVersion = JavaLanguageVersion.of(21)
    }
}

configurations {
    compileOnly {
        extendsFrom(configurations.annotationProcessor.get())
    }
}

sourceSets {
    main {
        java {
            srcDir("${layout.buildDirectory.get()}/generated-sources/jooq")
        }
    }
}

repositories {
    mavenCentral()
}



dependencies {
    implementation(libs.springdoc.ui)
    implementation("org.springframework.boot:spring-boot-starter-actuator")
    implementation("org.springframework.boot:spring-boot-starter-data-jpa")
    implementation("org.springframework.boot:spring-boot-starter-jooq")
    implementation("org.springframework.boot:spring-boot-starter-data-rest")
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("org.springframework.boot:spring-boot-starter-actuator")
    compileOnly("org.projectlombok:lombok")
    runtimeOnly("org.postgresql:postgresql")
    annotationProcessor("org.projectlombok:lombok")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
    testRuntimeOnly("org.junit.platform:junit-platform-launcher")
    jooqCodegen(libs.postgresql)
}

jooq {
    configuration {
        jdbc {
            driver = "org.postgresql.Driver"
            url = env.DB_URL.value
            user = env.DB_USER.value
            password = env.DB_PASSWORD.value
        }
        generator {
            name = "org.jooq.codegen.DefaultGenerator"
            database {
                name = "org.jooq.meta.postgres.PostgresDatabase"
                includes = ".*"
                excludes = "databasechangelog|databasechangeloglock"
            }
            target {
                packageName = "com.example.demo.infrastructure.db.jooq"
                directory = "build/generated-sources/jooq"
            }
        }
    }

    executions {
        create("chinook") {
            configuration {
                generator {
                    database {
                        inputSchema = "chinook"
                    }
                    generate {
                        isIndexes = true
                        isRoutines = true
                        isTables = true
                    }
                    target {
                        withClean(false)
                        packageName = "com.example.demo.infrastructure.db.jooq"
                        directory = "build/generated-sources/jooq"
                    }
                }
            }
        }
    }

}

tasks.withType<Test> {
    useJUnitPlatform()
}
