<template>
    <v-app>
        <HeaderComponent />

        <v-main>
            <v-container fluid>
                <v-row>
                    <v-col cols="3">
                        <SidebarFilters />
                    </v-col>

                    <v-col cols="9">
                        <router-view />
                    </v-col>
                </v-row>
            </v-container>
        </v-main>

        <FooterComponent />
    </v-app>
</template>

<script>
import HeaderComponent from '../components/layout/HeaderComponent.vue';
import SidebarFilters from '../components/layout/SidebarFilters.vue';
import FooterComponent from '../components/layout/FooterComponent.vue';

export default {
    components: { HeaderComponent, SidebarFilters, FooterComponent },
};
</script>