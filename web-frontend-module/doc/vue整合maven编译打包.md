maven配置
        
        <plugin>
                        <groupId>com.github.eirslett</groupId>
                        <artifactId>frontend-maven-plugin</artifactId>
                        <version>1.6</version>
                        <configuration>
        
                            <!-- <nodeVersion>v${node.version}</nodeVersion>
                                   <npmVersion>${npm.version}</npmVersion>-->
                            <!--该配置对应的configuration必须在plugin这一级节点下配置-->
                            <nodeVersion>v8.11.4</nodeVersion>
                            <npmVersion>5.6.0</npmVersion>
                            <!-- optional: where to download node from. Defaults to https://nodejs.org/dist/ -->
                            <!--<nodeDownloadRoot>http://myproxy.example.org/nodejs/</nodeDownloadRoot>-->
                            <!--The working directory is where you've put package.json and your frontend configuration files (Gruntfile.js or gulpfile.js etc). The default working directory is your project's base directory (the same directory as your pom.xml). You can change the working directory if you want-->
                            <workingDirectory>${project.basedir}/frontend</workingDirectory>
                            <!--The installation directory is the folder where your node and npm are installed. You can set this property on the different goals. Or choose to set it for all the goals, in the maven configuration-->
                            <installDirectory>${project.basedir}</installDirectory>
                        </configuration>
                        <executions>
                            <execution>
                                <id>install-node-and-npm</id>
                                <goals>
                                    <goal>install-node-and-npm</goal>
                                </goals>
                            </execution>
                            <execution>
                                <id>npm-install</id>
                                <phase>install</phase>
                                <goals>
                                    <goal>npm</goal>
                                </goals>
                                <configuration>
                                    <arguments>install --registry=https://registry.npm.taobao.org</arguments>
                                </configuration>
                            </execution>
                            <execution>
                                <id>npm run build</id>
                                <phase>package</phase>
                                <goals>
                                    <goal>npm</goal>
                                </goals>
                                <configuration>
                                    <!--<arguments>run build {env}</arguments>-->
                                    <arguments>run build prod</arguments>
                                </configuration>
                            </execution>
                        </executions>
                    </plugin>