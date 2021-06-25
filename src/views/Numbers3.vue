<template>
  <div class="outer-container">
    <h2>Numbers 61 - 100</h2>
    <div class="numbers-container">
      <div class="inner-container">
        <span><b>61</b> -> soixante et un</span>
        <span><b>62</b> -> soixante-deux</span>
        <span><b>63</b> -> soixante-trois</span>
        <span><b>64</b> -> soixante-quatre</span>
        <span><b>65</b> -> soixante-cinq</span>
        <span><b>66</b> -> soixante-six</span>
        <span><b>67</b> -> soixante-sept</span>
        <span><b>68</b> -> soixante-huit</span>
        <span><b>69</b> -> soixante-neuf</span>
        <span class="tens"><b>70</b> -> soixante-dix</span>
      </div>
      <div class="inner-container">
        <span><b>71</b> -> soixante et onze</span>
        <span><b>72</b> -> soixante-douze</span>
        <span><b>73</b> -> soixante-treize</span>
        <span><b>74</b> -> soixante-quatorze</span>
        <span><b>75</b> -> soixante-quinze</span>
        <span><b>76</b> -> soixante-seize</span>
        <span><b>77</b> -> soixante-dix-sept</span>
        <span><b>78</b> -> soixante-dix-huit</span>
        <span><b>79</b> -> soixante-dix-neuf</span>
        <span class="tens"><b>80</b> -> quatre-vingts</span>
      </div>
      <div class="inner-container">
        <span><b>81</b> -> quatre-vingts-un</span>
        <span><b>82</b> -> quatre-vingts-deux</span>
        <span><b>83</b> -> quatre-vingts-trois</span>
        <span><b>84</b> -> quatre-vingts-quatre</span>
        <span><b>85</b> -> quatre-vingts-cinq</span>
        <span><b>86</b> -> quatre-vingts-six</span>
        <span><b>87</b> -> quatre-vingts-sept</span>
        <span><b>88</b> -> quatre-vingts-huit</span>
        <span><b>89</b> -> quatre-vingts-neuf</span>
        <span class="tens"><b>90</b> -> quatre-vingts-dix </span>
      </div>
      <div class="inner-container">
        <span><b>91</b> -> quatre-vingts-onze</span>
        <span><b>92</b> -> quatre-vingts-douze</span>
        <span><b>93</b> -> quatre-vingts-treize</span>
        <span><b>94</b> -> quatre-vingts-quatorze</span>
        <span><b>95</b> -> quatre-vingts-quinze</span>
        <span><b>96</b> -> quatre-vingts-seize</span>
        <span><b>97</b> -> quatre-vingts-dix-sept</span>
        <span><b>98</b> -> quatre-vingts-dix-huit</span>
        <span><b>99</b> -> quatre-vingts-dix-neuf</span>
        <span class="tens"><b>100</b> -> cent </span>
      </div>
    </div>
  </div>
  <Navigator prev="/numbers2" next="/numbers4" />
</template>

<script>
import Navigator from "@/components/Navigator.vue";
export default {
  name: "Numbers3",
  components: { Navigator },
};
</script>

<style scoped>
.outer-container {
  display: flex;
  width: 100%;
  flex-flow: column nowrap;
  align-items: center;
}

h2 {
  font-size: 2.25em;
  font-family: "Homemade Apple", cursive;
}

.numbers-container {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  /* height: 100%; */
  width: 100%;
  margin-bottom: 10em;
}

.inner-container {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: flex-start;
  font-size: 2em;
  line-height: 1.75em;
}

.tens {
  color: rgb(255, 100, 126);
}
</style>