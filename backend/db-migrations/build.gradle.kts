plugins {
    alias(libs.plugins.liquibase)
}

ext {
    set("jdbcUsername", env.DB_USER.orNull()) // overwritten per environment
    set("jdbcPassword", env.DB_PASSWORD.orNull()) // overwritten per environment
    set("jdbcUrl", env.DB_URL.orNull())
}

dependencies {
    liquibaseRuntime(libs.bundles.liquibase)

}

liquibase {
    activities {
        register("chinook") {
            this.arguments = mapOf(
                "searchPath" to "${projectDir}/src/main/resources/db/changelog/chinook",
                "changelogFile" to "changelog.xml",
                "url" to "${project.ext["jdbcUrl"]}?currentSchema=myapp,extensions",
                "username" to project.ext["jdbcUsername"],
                "password" to project.ext["jdbcPassword"],
                "contexts" to "test"
            )
        }
    }
}
