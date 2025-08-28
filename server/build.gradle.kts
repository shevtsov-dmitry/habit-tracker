import cz.habarta.typescript.generator.JsonLibrary
import cz.habarta.typescript.generator.TypeScriptFileType
import cz.habarta.typescript.generator.TypeScriptOutputKind


plugins {
  java
  id("org.springframework.boot") version "3.5.4"
  id("io.spring.dependency-management") version "1.1.7"
  id("cz.habarta.typescript-generator") version "3.2.1263"
}

tasks {
  generateTypeScript {
    jsonLibrary = JsonLibrary.jackson2
    outputKind = TypeScriptOutputKind.module
    classPatterns = listOf("io.habit_tracker.**")
    classesFromAutomaticJaxrsApplication = false // used to add spring boot from backend Beans when true
    excludeClassPatterns = listOf("io.habarta.typescript.generator.**", "cz.habarta.typescript.generator.**")
    outputFileType = TypeScriptFileType.declarationFile
    outputFile = "../client/src/types/backend.d.ts"
  }
}

group = "io"
version = "0.0.1-SNAPSHOT"

java {
  toolchain {
    languageVersion = JavaLanguageVersion.of(24)
  }
}

configurations {
  compileOnly {
    extendsFrom(configurations.annotationProcessor.get())
  }
}

repositories {
  mavenCentral()
}

dependencies {
  implementation("org.springframework.boot:spring-boot-starter-data-jpa")
  implementation("org.springframework.boot:spring-boot-starter-validation")
  implementation("org.springframework.boot:spring-boot-starter-data-rest")
  compileOnly("org.projectlombok:lombok")
  developmentOnly("org.springframework.boot:spring-boot-devtools")
  runtimeOnly("org.postgresql:postgresql")
  annotationProcessor("org.projectlombok:lombok")
  testImplementation("org.springframework.boot:spring-boot-starter-test")
  testRuntimeOnly("org.junit.platform:junit-platform-launcher")
}

tasks.withType<Test> {
  useJUnitPlatform()
}
